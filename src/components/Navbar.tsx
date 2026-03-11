import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isLanding ? "bg-transparent" : "bg-white/80 backdrop-blur-md border-b border-slate-200"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Zap className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold tracking-tight">KINETIC</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/collections" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
          <Link to="/collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</Link>
          <Link to="/collections" className="text-sm font-medium hover:text-primary transition-colors">Sustainability</Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary ring-2 ring-white"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
