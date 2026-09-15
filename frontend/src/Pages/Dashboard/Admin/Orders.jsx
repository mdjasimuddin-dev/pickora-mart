import { useState } from 'react';
import {
  ShoppingCart,
  Search,
  Filter,
  Eye,
  CheckCircle,
  Clock,
  Truck,
  XCircle,
} from 'lucide-react';

export default function AdminOrders() {
  // ডামি অর্ডার ডেটা (আপনার ব্যাকএন্ড বা API ডেটা দিয়ে রিপ্লেস করতে পারেন)
  const [orders, setOrders] = useState([
    {
      id: '#ORD-9842',
      customer: 'Alex Johnson',
      email: 'alex@example.com',
      product: 'Wireless Headphones',
      amount: '$299.00',
      date: '14 Sep 2026',
      status: 'Completed',
    },
    {
      id: '#ORD-9841',
      customer: 'Sarah Miller',
      email: 'sarah@example.com',
      product: 'Smart Watch Series 7',
      amount: '$199.00',
      date: '14 Sep 2026',
      status: 'Processing',
    },
    {
      id: '#ORD-9840',
      customer: 'David Smith',
      email: 'david@example.com',
      product: 'Ergonomic Office Chair',
      amount: '$149.50',
      date: '13 Sep 2026',
      status: 'Shipped',
    },
    {
      id: '#ORD-9839',
      customer: 'Emma Davis',
      email: 'emma@example.com',
      product: 'Minimalist Leather Backpack',
      amount: '$89.00',
      date: '12 Sep 2026',
      status: 'Pending',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // স্ট্যাটাস এবং সার্চ ফিল্টার লজিক
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === 'All' || order.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // অর্ডার স্ট্যাটাস আপডেট করার ফাংশন
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Order Management</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            View customer orders, track fulfillment status, and manage deliveries.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Box */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by ID, customer, product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 text-slate-800"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          {['All', 'Pending', 'Processing', 'Shipped', 'Completed'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedStatus === status
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
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 sm:p-6 overflow-hidden">
        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-3">Order ID</th>
                <th className="py-3 px-3">Customer</th>
                <th className="py-3 px-3">Product</th>
                <th className="py-3 px-3">Amount</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-3 font-semibold text-indigo-600">{order.id}</td>
                    <td className="py-3 px-3">
                      <div className="font-medium text-slate-800">{order.customer}</div>
                      <div className="text-xs text-slate-400">{order.email}</div>
                    </td>
                    <td className="py-3 px-3 text-slate-600 truncate max-w-[150px]">
                      {order.product}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{order.amount}</td>
                    <td className="py-3 px-3 text-slate-500 text-xs">{order.date}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                          order.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-600'
                            : order.status === 'Processing'
                              ? 'bg-amber-50 text-amber-600'
                              : order.status === 'Shipped'
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {order.status === 'Completed' && <CheckCircle className="w-3.5 h-3.5" />}
                        {order.status === 'Processing' && <Clock className="w-3.5 h-3.5" />}
                        {order.status === 'Shipped' && <Truck className="w-3.5 h-3.5" />}
                        {order.status === 'Pending' && <XCircle className="w-3.5 h-3.5" />}
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Status Change Dropdown / Quick Action */}
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 focus:outline-none focus:border-indigo-500 text-slate-700"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Completed">Completed</option>
                        </select>

                        <button
                          className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
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
