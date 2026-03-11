import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, CheckCircle, ChevronRight, Rotate3d, Wind, RefreshCw, Cloud } from 'lucide-react';
import { PRODUCTS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

const ICON_MAP: Record<string, any> = {
  Wind,
  RefreshCw,
  Cloud
};

export function ProductDetailPage() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name);
  const [selectedSize, setSelectedSize] = useState('9');

  return (
    <div className="min-h-screen bg-background-light pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-slate-500 hover:text-primary transition-colors font-medium">Home</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link to="/collections" className="text-slate-500 hover:text-primary transition-colors font-medium">Men</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-900 font-semibold">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Product Image Viewer */}
          <div className="flex-1 lg:basis-3/5 relative bg-white rounded-[2rem] overflow-hidden flex items-center justify-center group border border-slate-200 shadow-sm aspect-square lg:aspect-auto lg:h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent opacity-70"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-4/5 h-auto z-10"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-2 border border-slate-200 shadow-lg z-20">
              <Rotate3d className="text-primary w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Drag to Rotate</span>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex-1 lg:basis-2/5 flex flex-col">
            <div className="mb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{product.category}</h4>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">{product.name}</h1>
                </div>
                <button className="p-3 rounded-full hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-all border border-slate-100">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-10">
              <span className="text-4xl font-black text-slate-900">${product.price.toFixed(2)}</span>
            </div>

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-10">
                <span className="block text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                  Color: <span className="text-slate-500 font-normal">{selectedColor}</span>
                </span>
                <div className="flex gap-4">
                  {product.colors.map((color) => (
                    <button 
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "size-10 rounded-full transition-all ring-offset-2",
                        selectedColor === color.name ? "ring-2 ring-primary" : "hover:ring-2 hover:ring-slate-300"
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Select Size</span>
                  <button className="text-xs text-primary underline font-bold uppercase tracking-wider">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "h-12 rounded-xl border transition-all text-sm font-bold",
                        selectedSize === size 
                          ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105" 
                          : "bg-white border-slate-200 text-slate-900 hover:border-primary hover:text-primary"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-12">
              <button className="w-full h-16 bg-primary hover:bg-blue-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                Add to Cart
              </button>
              <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free shipping on orders over $100
              </p>
            </div>

            {/* Tech Specs */}
            {product.specs.length > 0 && (
              <div className="mt-auto pt-8 border-t border-slate-200">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6">Technical Specs</h3>
                <div className="grid grid-cols-3 gap-4">
                  {product.specs.map((spec) => {
                    const Icon = ICON_MAP[spec.icon];
                    return (
                      <div key={spec.label} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                          {Icon && <Icon className="w-5 h-5" />}
                        </div>
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">{spec.label}</span>
                        <span className="text-[9px] text-slate-500 mt-1">{spec.sub}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-32">
          <h3 className="text-2xl font-black text-slate-900 mb-10">You might also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.id !== id).slice(0, 4).map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className={cn("aspect-[4/5] rounded-2xl mb-4 relative overflow-hidden transition-all duration-300 group-hover:shadow-xl", p.bgColor)}>
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{p.name}</h4>
                <p className="text-slate-500 text-sm">${p.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
