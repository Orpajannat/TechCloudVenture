import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#core-services' },
  { label: 'Distribution Partner' },
  { label: 'FAQ' },
];

const services = [
  { label: 'Wholesale Services for Sellers' },
  { label: 'Amazon Services for Brands' },
];

const socials = [
  { name: 'Facebook', path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z' },
  { name: 'LinkedIn', path: 'M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.96V9.2h2.97v9.55ZM6.45 7.9a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.85h-2.97V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.47V9.2h2.85v1.3h.04c.4-.75 1.37-1.55 2.81-1.55 3.01 0 3.58 1.98 3.58 4.55v5.25Z' },
  { name: 'Instagram' },
  { name: 'Pinterest', path: 'M12 2a10 10 0 0 0-3.64 19.31c-.03-.79-.01-1.74.2-2.64l1.29-5.45s-.32-.64-.32-1.59c0-1.49.86-2.6 1.93-2.6.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.93 1.58 1.93 1.9 0 3.36-2 3.36-4.89 0-2.55-1.83-4.33-4.45-4.33-3.03 0-4.81 2.27-4.81 4.61 0 .91.35 1.89.79 2.42.09.11.1.21.07.32l-.3 1.22c-.05.2-.16.24-.37.14-1.37-.64-2.23-2.65-2.23-4.27 0-3.48 2.53-6.68 7.3-6.68 3.83 0 6.81 2.73 6.81 6.38 0 3.81-2.4 6.88-5.73 6.88-1.12 0-2.17-.58-2.53-1.27l-.69 2.62c-.25.96-.93 2.16-1.38 2.89A10 10 0 1 0 12 2Z' },
];

// Add confirmed destinations here when the corresponding pages and social profiles are available.
const destinations = {};

function FooterItem({ label, href, compact = false }) {
  const destination = href || destinations[label];
  const className = compact
    ? 'inline-flex min-h-11 items-center py-2 text-sm text-slate-300 transition-colors duration-200 hover:text-[#6DDCF5] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6DDCF5] motion-reduce:transition-none'
    : 'group/link inline-flex min-h-11 max-w-full items-center py-2 text-sm leading-6 text-slate-300 transition-[color,transform] duration-200 hover:text-[#6DDCF5] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6DDCF5] motion-safe:hover:translate-x-1 motion-reduce:transition-none';

  return destination ? (
    <Link href={destination} className={className}>{label}</Link>
  ) : (
    <span className={className}>{label}</span>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#101B2C] font-sans text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#0EB1DB]/60 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-40 -z-10 size-96 rounded-full bg-[#005593]/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 sm:px-6 sm:py-16 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1fr] lg:gap-8 lg:px-8 lg:py-20 xl:gap-12">
        <div className="min-w-0">
          <Link href="/" aria-label="Tech Cloud Global Venture home" className="inline-flex rounded-lg transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6DDCF5] motion-reduce:transition-none">
            <Image src="/images/HeaderLogo.png" alt="tech cloud GLOBAL VENTURE" width={433} height={297} sizes="176px" className="h-auto w-44 object-contain" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
            Founded to bridge the gap between global sourcing and Amazon fulfillment, Tech Cloud Global Venture helps brands scale efficiently across markets.
          </p>
          <ul aria-label="Social media" className="mt-6 flex flex-wrap gap-3">
            {socials.map(({ name, path }) => {
              const href = destinations[name];
              const Tag = href ? 'a' : 'span';
              return (
                <li key={name}>
                  <Tag href={href} aria-label={name} role={href ? undefined : 'img'} title={name} className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-[color,background-color,border-color,transform,box-shadow] duration-300 hover:border-[#0EB1DB]/60 hover:bg-[#005593] hover:text-white hover:shadow-lg hover:shadow-[#0EB1DB]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6DDCF5] motion-safe:hover:-translate-y-1 motion-reduce:transition-none">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4.5" fill={path ? 'currentColor' : 'none'}>
                      {path ? <path d={path} /> : (
                        <>
                          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </>
                      )}
                    </svg>
                  </Tag>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-labelledby="footer-quick-links" className="min-w-0 lg:pt-3">
          <h2 id="footer-quick-links" className="text-base font-semibold tracking-tight">Quick Links</h2>
          <div aria-hidden="true" className="mt-3 h-0.5 w-8 rounded-full bg-[#0EB1DB]/70" />
          <ul className="mt-4 space-y-1">
            {quickLinks.map((item) => <li key={item.label}><FooterItem {...item} /></li>)}
          </ul>
        </nav>

        <div className="min-w-0 lg:pt-3">
          <h2 id="footer-contact-info" className="text-base font-semibold tracking-tight">Contact info</h2>
          <div aria-hidden="true" className="mt-3 h-0.5 w-8 rounded-full bg-[#0EB1DB]/70" />
          <address aria-labelledby="footer-contact-info" className="mt-6 space-y-4 text-sm leading-7 text-slate-300 not-italic">
            <div className="flex items-start gap-3">
              <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-[#6DDCF5]" />
              <p>3650 Greenside Ct,<br />Dacula, GA,USA, 30019</p>
            </div>
            <a href="mailto:info@techcloudventure.com" className="group flex min-h-11 items-center gap-3 rounded transition-colors hover:text-[#6DDCF5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6DDCF5] motion-reduce:transition-none">
              <Mail size={18} aria-hidden="true" className="shrink-0 text-[#6DDCF5]" />
              <span className="min-w-0 wrap-anywhere">info@techcloudventure.com</span>
            </a>
            <a href="tel:+14702139449" className="flex min-h-11 items-center gap-3 rounded transition-colors hover:text-[#6DDCF5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6DDCF5] motion-reduce:transition-none">
              <Phone size={18} aria-hidden="true" className="shrink-0 text-[#6DDCF5]" />
              <span>+1(470) 213-9449</span>
            </a>
          </address>
        </div>

        <nav aria-labelledby="footer-services" className="min-w-0 lg:pt-3">
          <h2 id="footer-services" className="text-base font-semibold tracking-tight">Our Services</h2>
          <div aria-hidden="true" className="mt-3 h-0.5 w-8 rounded-full bg-[#0EB1DB]/70" />
          <ul className="mt-4 space-y-1">
            {services.map((item) => <li key={item.label}><FooterItem {...item} /></li>)}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 lg:px-8">
          <p className="text-sm leading-6 text-slate-300">Copyright &copy; 2026 . All Rights Reserved</p>
          <div className="flex flex-wrap items-center gap-x-1.5">
            <FooterItem label="Terms & Conditions" compact />
            <span aria-hidden="true" className="text-slate-500">|</span>
            <FooterItem label="Privacy Policy" compact />
          </div>
        </div>
      </div>
    </footer>
  );
}
