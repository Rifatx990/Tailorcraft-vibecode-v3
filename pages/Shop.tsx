import React, { useState } from 'react';
import { Filter, ShoppingCart } from 'lucide-react';
import { MOCK_PRODUCTS } from '../services/mockData';
import { Product, ProductCategory } from '../types';

export const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(5000);

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesPrice = product.price <= priceRange;
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-gray-800">
                <Filter className="h-5 w-5" />
                <h3 className="font-bold text-lg">Filters</h3>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Categories</h4>
                <ul className="space-y-2">
                  {['All', ...Object.values(ProductCategory)].map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm w-full text-left py-1 ${activeCategory === cat ? 'text-brand-600 font-bold' : 'text-gray-600 hover:text-brand-500'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Max Price: ৳ {priceRange}</h4>
                <input 
                  type="range" 
                  min="0" 
                  max="10000" 
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>৳ 0</span>
                  <span>৳ 10000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">{activeCategory} Collections</h1>
              <span className="text-sm text-gray-500">{filteredProducts.length} results</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-lg shadow-sm">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product: Product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
                    <div className="relative h-56 bg-gray-200">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <div className="text-xs text-brand-500 font-semibold mb-1 uppercase">{product.category}</div>
                      <h3 className="font-bold text-gray-900 mb-2 truncate">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-lg font-bold text-gray-900">৳ {product.price}</span>
                        <button className="bg-gray-100 hover:bg-brand-500 hover:text-white text-gray-800 p-2 rounded-full transition">
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
