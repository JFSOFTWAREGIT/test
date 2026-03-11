import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Star, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export function CollectionsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-background-light pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500"
          >
            The Collection
          </motion.h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg font-light">
            Engineered for motion. Designed for life. Explore the intersection of performance and aesthetics.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className={cn(
                  "aspect-[4/5] w-full rounded-3xl relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2",
                  product.bgColor
                )}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-50"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 ease-out group-hover:scale-110">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="object-contain w-full h-full drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {product.category.includes('NEW') && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-white/80 backdrop-blur-sm text-primary uppercase tracking-wider">
                        New
                      </span>
                    </div>
                  )}

                  {product.category.includes('LIMITED') && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-white/80 backdrop-blur-sm text-orange-600 uppercase tracking-wider">
                        Limited
                      </span>
                    </div>
                  )}

                  <button className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </Link>

              <div className="mt-6 flex justify-between items-start">
                <div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">{product.category}</p>
                </div>
                <p className="text-xl font-bold text-slate-900">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Filter Pill */}
      <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center px-4">
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-full p-1.5 shadow-2xl flex items-center gap-1">
          {['All', 'Performance', 'Lifestyle', 'Limited'].map((item) => (
            <button 
              key={item}
              onClick={() => setFilter(item)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
                filter === item 
                  ? "bg-slate-900 text-white shadow-md" 
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {item === 'Limited' && <Star className="w-3 h-3 inline mr-1 fill-current" />}
              {item}
            </button>
          ))}
          <div className="w-px h-6 bg-slate-200 mx-1"></div>
          <button className="p-2.5 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
