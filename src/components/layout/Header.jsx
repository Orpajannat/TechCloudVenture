"use client"
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? 'bg-[#00022D]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className={`relative mx-auto flex h-24 w-full max-w-7xl justify-between gap-4 px-4 sm:h-28 sm:px-6 lg:h-30 lg:px-8 transition-all duration-300 ${scrolled ? 'items-center' : 'items-end'}`}>
        <Link href="/" aria-label="Tech Cloud Venture home" className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <Image src="/images/HeaderLogo.png" alt="Tech Cloud Venture" width={150} height={150} sizes="(min-width: 1024px) 150px, (min-width: 640px) 100px, 80px" className="h-auto w-20 sm:w-25 lg:w-37.5" />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
