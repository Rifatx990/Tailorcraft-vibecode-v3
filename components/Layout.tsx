import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Scissors, User, LayoutDashboard, LogOut } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const cartCount = 2; // Mock count

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path ? 'text-brand-gold font-bold' : 'text-gray-100 hover:text-brand-gold transition';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-brand-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-brand-gold" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider uppercase">Mehedi Tailors</span>
                <span className="text-xs text-gray-300 -mt-1 tracking-widest">And Fabrics</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/shop" className={isActive('/shop')}>Shop</Link>
              <Link to="/custom" className={isActive('/custom')}>Tailoring</Link>
              <Link to="/admin" className={isActive('/admin')}>Dashboard</Link>
            </nav>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/cart" className="relative text-gray-100 hover:text-brand-gold">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                <User className="h-5 w-5" />
                <span>Login</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-100 hover:text-brand-gold p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-800 border-t border-brand-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-700">Home</Link>
              <Link to="/shop" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-700">Shop</Link>
              <Link to="/custom" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-700">Custom Tailoring</Link>
              <Link to="/admin" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-700">Dashboard</Link>
              <Link to="/cart" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-700">Cart ({cartCount})</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">Mehedi Tailors</h3>
            <p className="text-gray-400 text-sm">
              Providing premium quality fabrics and custom tailoring services since 2010. 
              We ensure the perfect fit for every occasion.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Dhonaid, Ashulia, Savar, Dhaka<br />
              +8801720267213
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white">New Arrivals</Link></li>
              <li><Link to="/custom" className="hover:text-white">Book Appointment</Link></li>
              <li><Link to="/tracking" className="hover:text-white">Track Order</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none" />
              <button className="bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-r-md font-medium">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Mehedi Tailors And Fabrics. All rights reserved. Developed by Md Rifat Hossain.
        </div>
      </footer>
    </div>
  );
};
