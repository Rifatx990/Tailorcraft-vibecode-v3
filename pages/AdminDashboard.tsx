import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import { Users, ShoppingBag, DollarSign, Scissors, TrendingUp } from 'lucide-react';
import { MOCK_ORDERS } from '../services/mockData';

const SALES_DATA = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
  { name: 'Jul', sales: 3490 },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500">Overview of shop performance and recent activities.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
                    <div className="p-2 bg-green-50 rounded-lg">
                        <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">৳ 124,500</div>
                <div className="flex items-center mt-2 text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+12.5% from last month</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Active Orders</h3>
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <ShoppingBag className="h-5 w-5 text-blue-600" />
                    </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>8 pending completion</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Custom Tailoring</h3>
                    <div className="p-2 bg-purple-50 rounded-lg">
                        <Scissors className="h-5 w-5 text-purple-600" />
                    </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>Measurements under review</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Total Customers</h3>
                    <div className="p-2 bg-orange-50 rounded-lg">
                        <Users className="h-5 w-5 text-orange-600" />
                    </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">856</div>
                <div className="flex items-center mt-2 text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+5 new today</span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Sales Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Revenue Analytics (BDT)</h3>
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={SALES_DATA}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `৳${value}`} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                                itemStyle={{ color: '#1e40af' }}
                                formatter={(value: number) => [`৳ ${value}`, 'Revenue']}
                            />
                            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

             {/* Order Volume Chart */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Order Volume</h3>
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={SALES_DATA}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip 
                                cursor={{ fill: '#f3f4f6' }}
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                            />
                            <Bar dataKey="sales" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
                <button className="text-sm text-brand-600 font-medium hover:text-brand-800">View All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-500 uppercase">
                        <tr>
                            <th className="px-6 py-3 font-medium">Order ID</th>
                            <th className="px-6 py-3 font-medium">Customer</th>
                            <th className="px-6 py-3 font-medium">Type</th>
                            <th className="px-6 py-3 font-medium">Date</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {MOCK_ORDERS.map(order => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                <td className="px-6 py-4 text-gray-600">User {order.userId}</td>
                                <td className="px-6 py-4">
                                    {order.isCustom ? 
                                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">Custom</span> : 
                                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Product</span>
                                    }
                                </td>
                                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold
                                        ${order.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : ''}
                                        ${order.status === 'PROCESSING' ? 'bg-yellow-100 text-yellow-700' : ''}
                                        ${order.status === 'PENDING' ? 'bg-gray-100 text-gray-700' : ''}
                                    `}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-gray-900">৳ {order.totalAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>
  );
};
