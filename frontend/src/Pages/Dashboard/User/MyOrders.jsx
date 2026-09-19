import React, { useState } from 'react';
import { Package, Search, Eye, Clock, CheckCircle2, XCircle, Truck } from 'lucide-react';

export default function MyOrders() {
  // User-er order-er dumi data
  const [orders, setOrders] = useState([
    {
      id: '#ORD-9841',
      product: 'Smart Watch Series 7',
      date: '18 May 2026',
      amount: '$299.00',
      status: 'Processing',
      items: 1,
    },
    {
      id: '#ORD-9832',
      product: 'Wireless Headphones',
      date: '02 May 2026',
      amount: '$129.00',
      status: 'Completed',
      items: 2,
    },
    {
      id: '#ORD-9750',
      product: 'Ergonomic Office Chair',
      date: '15 Apr 2026',
      amount: '$149.50',
      status: 'Shipped',
      items: 1,
    },
    {
      id: '#ORD-9620',
      product: 'Minimalist Leather Backpack',
      date: '30 Mar 2026',
      amount: '$89.00',
      status: 'Cancelled',
      items: 1,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Search ebong Status filter logic
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">My Orders</h1>
          <p className="text-sm text-slate-500">Track, manage, and view your purchase history.</p>
        </div>
      </div>

      {/* Search & Status Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search order ID or product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 text-slate-800"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          {['All', 'Processing', 'Shipped', 'Completed', 'Cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                statusFilter === status
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-3">Order ID</th>
                <th className="py-3 px-3">Product</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Items</th>
                <th className="py-3 px-3">Amount</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-3 font-semibold text-indigo-600">{order.id}</td>
                    <td className="py-3 px-3 font-medium text-slate-800">{order.product}</td>
                    <td className="py-3 px-3 text-slate-500 text-xs">{order.date}</td>
                    <td className="py-3 px-3 text-slate-600">{order.items} unit(s)</td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{order.amount}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${
                          order.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-600'
                            : order.status === 'Processing'
                              ? 'bg-amber-50 text-amber-600'
                              : order.status === 'Shipped'
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-rose-50 text-rose-600'
                        }`}
                      >
                        {order.status === 'Completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {order.status === 'Processing' && <Clock className="w-3.5 h-3.5" />}
                        {order.status === 'Shipped' && <Truck className="w-3.5 h-3.5" />}
                        {order.status === 'Cancelled' && <XCircle className="w-3.5 h-3.5" />}
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                        <Eye className="w-3.5 h-3.5" /> Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-400">
                    No orders found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
