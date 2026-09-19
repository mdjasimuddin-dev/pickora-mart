import { ShoppingBag, Clock, CheckCircle2, Heart, User, ArrowRight } from 'lucide-react';

export default function UserOverview() {
  // User Dashboard Stats Data
  const userStats = [
    {
      title: 'Total Orders',
      value: '12',
      icon: ShoppingBag,
      color: 'text-indigo-600 bg-indigo-50',
    },
    { title: 'Pending Delivery', value: '2', icon: Clock, color: 'text-amber-600 bg-amber-50' },
    {
      title: 'Completed Orders',
      value: '10',
      icon: CheckCircle2,
      color: 'text-emerald-600 bg-emerald-50',
    },
    { title: 'Wishlist Items', value: '5', icon: Heart, color: 'text-rose-600 bg-rose-50' },
  ];

  // Recent Orders Data for User
  const recentOrders = [
    {
      id: '#ORD-9841',
      product: 'Smart Watch Series 7',
      date: '18 May 2026',
      amount: '$299.00',
      status: 'Processing',
    },
    {
      id: '#ORD-9832',
      product: 'Wireless Headphones',
      date: '02 May 2026',
      amount: '$129.00',
      status: 'Completed',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
          <p className="text-indigo-100 text-sm mt-1">
            Here is a quick look at your recent activities and orders.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium">
          <User className="w-4 h-4" />
          <span>Profile Status: Active</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800">Your Recent Orders</h3>
          <span className="text-xs font-semibold text-indigo-600 cursor-pointer hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-3">Order ID</th>
                <th className="py-3 px-3">Product</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Amount</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-3 font-medium text-slate-700">{order.id}</td>
                  <td className="py-3 px-3 text-slate-600">{order.product}</td>
                  <td className="py-3 px-3 text-slate-500">{order.date}</td>
                  <td className="py-3 px-3 font-semibold text-slate-800">{order.amount}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-amber-50 text-amber-600'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
