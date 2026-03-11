import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="text-primary w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">KINETIC</span>
            </div>
            <p className="text-slate-500 max-w-xs mb-6">
              Redefining footwear through innovation, sustainability, and design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-600">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/collections" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections" className="hover:text-primary transition-colors">Best Sellers</Link></li>
              <li><Link to="/collections" className="hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to="/collections" className="hover:text-primary transition-colors">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Size Guide</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 KINETIC Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-900 text-white py-2 mt-8 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-xs font-bold tracking-widest uppercase">
              Free Shipping Worldwide • 30-Day Returns • Secure Payment
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
