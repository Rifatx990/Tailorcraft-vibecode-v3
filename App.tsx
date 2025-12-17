import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CustomTailoring } from './pages/CustomTailoring';
import { AdminDashboard } from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="custom" element={<CustomTailoring />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="cart" element={<div className="p-10 text-center text-gray-500">Cart Feature Mockup</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
