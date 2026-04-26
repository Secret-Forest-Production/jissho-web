import React from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';
import { footerLinks } from '@/Shared/data/footer-link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-dark text-gray-400 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="space-y-6">
          <h3 className="text-white text-2xl font-bold">
            Yayasan <span className="text-red-normal">Jissho</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Lembaga Pelatihan Kerja Jepang terpercaya untuk mewujudkan impian bekerja di Negeri Sakura.
          </p>
          
          <div className="flex items-center gap-3">
            {footerLinks.socials.map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-normal hover:text-white transition-all text-gray-400"
                aria-label={social.label}
              >
                <Icon icon={social.icon} width="20" height="20" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium">
            {footerLinks.quickLinks.map((link, i) => (
              <li key={i}>
                <Link 
                  href={link.href} 
                  className="hover:text-red-light-active transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Program Section */}
        <div>
          <h4 className="text-white font-semibold mb-6">Program</h4>
          <ul className="space-y-4 text-sm font-medium">
            {footerLinks.programs.map((link, i) => (
              <li key={i}>
                <Link 
                  href={link.href} 
                  className="hover:text-red-light-active transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white font-semibold mb-6">Kontak</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <Icon icon="tabler:map-pin" className="text-red-normal text-xl shrink-0" />
              <span className="leading-tight">{footerLinks.contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="mdi:phone-outline" className="text-red-normal text-xl shrink-0" />
              <span>{footerLinks.contact.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="mdi:email-outline" className="text-red-normal text-xl shrink-0" />
              <span>{footerLinks.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
        <p>© {currentYear} Yayasan Jissho. All rights reserved.</p>
      </div>
    </footer>
  );
}