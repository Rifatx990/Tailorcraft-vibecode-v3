import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Truck, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS } from '../services/mockData';

export const Home: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/1920/1080?blur=2" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Precision Tailoring <br />
              <span className="text-brand-gold">Premium Fabrics</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the perfect fit with Mehedi Tailors. From custom suits to traditional panjabis, we craft elegance for every stitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/custom" className="bg-brand-gold text-brand-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition shadow-lg flex items-center justify-center">
                Book Tailoring <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/shop" className="bg-transparent border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-brand-900 transition font-semibold">
                Shop Fabrics
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
             <div className="relative w-80 h-96 bg-brand-800 rounded-lg transform rotate-3 shadow-2xl p-2">
                 <img src="https://picsum.photos/400/500?random=10" alt="Suit" className="w-full h-full object-cover rounded" />
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-500 mb-6">
                        <Ruler className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Custom Measurements</h3>
                    <p className="text-gray-500">Provide your measurements online or book a home visit for the perfect fit.</p>
                </div>
                <div className="p-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-500 mb-6">
                        <Truck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                    <p className="text-gray-500">We ensure timely delivery within Dhaka and nationwide shipping for fabrics.</p>
                </div>
                <div className="p-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-500 mb-6">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
                    <p className="text-gray-500">Premium materials and expert craftsmanship backed by our satisfaction guarantee.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
                    <p className="text-gray-500 mt-2">Our latest collection of fabrics and ready-made attire.</p>
                </div>
                <Link to="/shop" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center">
                    View All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group">
                        <div className="relative h-64 overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                            <div className="absolute top-4 right-4 bg-brand-gold text-xs font-bold px-2 py-1 rounded">
                                {product.category}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-brand-800">৳ {product.price}</span>
                                <button className="text-brand-600 font-medium hover:underline">Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
