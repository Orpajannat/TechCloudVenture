"use client"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const [submenuItemOpen, setSubmenuItemOpen] = useState(null)
    const navRef = useRef(null)
    const toggleRef = useRef(null)
    const servicesRef = useRef(null)

    function canHover(event) {
        return event.pointerType === 'mouse' &&
            window.matchMedia('(min-width: 1024px) and (hover: hover)').matches
    }

    function closeMenus() {
        setMobileOpen(false)
        setSubmenuOpen(false)
        setSubmenuItemOpen(null)
    }

    useEffect(() => {
        function handlePointer(event) {
            if (!navRef.current?.contains(event.target)) closeMenus()
        }
        function handleEscape(event) {
            if (event.key !== 'Escape') return
            if (navRef.current?.contains(document.activeElement)) {
                if (window.matchMedia('(min-width: 1024px)').matches) {
                    servicesRef.current?.focus()
                } else {
                    toggleRef.current?.focus()
                }
            }
            closeMenus()
        }
        const desktop = window.matchMedia('(min-width: 1024px)')
        document.addEventListener('pointerdown', handlePointer)
        document.addEventListener('keydown', handleEscape)
        desktop.addEventListener('change', closeMenus)
        return () => {
            document.removeEventListener('pointerdown', handlePointer)
            document.removeEventListener('keydown', handleEscape)
            desktop.removeEventListener('change', closeMenus)
        }
    }, [])

    const navItems = [
        {menu: "Home",
        href: "/"},
        {menu: "Our Story",
        href: "/our-story"},
        {menu: "Services",
        submenu: [
            {label:"Wholesale Services For Sellers",
                submenuItems: [
                    {label: "Brand Approval Service",
                    href: "/"},
                    {label: "Brand Approval Service",
                    href: "/"},
                    {label: "Brand Approval Service",
                    href: "/"},
                    {label: "Brand Approval Service",
                    href: "/"},
                ],
            href: "/"},
            {label:"Wholesale Services For Sellers",
                submenuItems: [
                    {label: "Brand Approval Service",
                    href: "/"},
                    {label: "Brand Approval Service",
                    href: "/"},
                    {label: "Brand Approval Service",
                    href: "/"},
                    {label: "Brand Approval Service",
                    href: "/"},
                ],
            href: "/"}
        ],
        href: "/"},
        {menu: "Distribution Partner",
        href: "/distribution-partner"},
        {menu: "Contact",
        href: "/contact"},
    ]
  return (
    <nav ref={navRef} aria-label="Main navigation" className="min-w-0 text-base text-white lg:text-lg" onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenus()
    }}>
      <button ref={toggleRef} type="button" aria-controls="primary-navigation" aria-expanded={mobileOpen} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} onClick={() => {
          closeMenus()
          setMobileOpen(!mobileOpen)
      }} className="flex size-11 items-center justify-center rounded-lg border border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden">
        {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <ul id="primary-navigation" className={`${mobileOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full max-h-[calc(100dvh-6rem)] flex-col gap-1 overflow-y-auto overscroll-contain bg-[#00022D] p-4 shadow-lg sm:max-h-[calc(100dvh-7rem)] sm:px-6 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-5 lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-10`}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className="relative min-w-0"
            onPointerEnter={(event) => {
                if (item.submenu && canHover(event)) setSubmenuOpen(true)
            }}
            onPointerLeave={(event) => {
                if (!item.submenu || !canHover(event) || event.currentTarget.contains(document.activeElement)) return
                setSubmenuOpen(false)
                setSubmenuItemOpen(null)
            }}
          >
            {item.submenu ? (
              <>
                <button ref={servicesRef} type="button" aria-expanded={submenuOpen} aria-controls="services-navigation" onClick={() => {
                    setSubmenuOpen(!submenuOpen)
                    setSubmenuItemOpen(null)
                }} className="flex min-h-11 w-full items-center justify-between gap-2 rounded px-2 py-2 text-left hover:text-[#F8C207] focus-visible:outline-2 focus-visible:outline-[#F8C207] lg:justify-start">
                  {item.menu}
                  <ChevronDown size={20} aria-hidden="true" className={`shrink-0 transition-transform ${submenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <ul id="services-navigation" className={`${submenuOpen ? 'flex' : 'hidden'} w-full flex-col rounded-md bg-white p-2 text-base text-[#00022D] shadow-lg lg:absolute lg:top-full lg:left-0 lg:max-h-[calc(100dvh-10rem)] lg:w-80 lg:overflow-y-auto lg:overscroll-contain`}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="min-w-0"
                      onPointerEnter={(event) => {
                          if (canHover(event)) setSubmenuItemOpen(subIndex)
                      }}
                      onPointerLeave={(event) => {
                          if (!canHover(event) || event.currentTarget.contains(document.activeElement)) return
                          setSubmenuItemOpen((current) => current === subIndex ? null : current)
                      }}
                    >
                      <button type="button" aria-expanded={submenuItemOpen === subIndex} aria-controls={`service-group-${subIndex}`} onClick={() => setSubmenuItemOpen(submenuItemOpen === subIndex ? null : subIndex)} className="flex min-h-11 w-full items-center justify-between gap-2 rounded px-2 py-3 text-left hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#4A88EA]">
                        <span>{subItem.label}</span>
                        <ChevronDown size={18} aria-hidden="true" className={`shrink-0 transition-transform ${submenuItemOpen === subIndex ? 'rotate-180' : ''}`} />
                      </button>
                      <ul id={`service-group-${subIndex}`} className={`${submenuItemOpen === subIndex ? 'flex' : 'hidden'} flex-col border-l border-slate-200 pl-3`}>
                        {subItem.submenuItems.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>
                            <Link href={subSubItem.href} onClick={closeMenus} className="block rounded px-2 py-3 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#4A88EA]">
                              {subSubItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.href} onClick={closeMenus} className="block min-h-11 rounded px-2 py-2 hover:text-[#F8C207] focus-visible:outline-2 focus-visible:outline-[#F8C207]">
                {item.menu}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
