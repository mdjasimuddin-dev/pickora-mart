import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Clock,
} from 'lucide-react';

export default function AdminOverview() {
  // Stat Box Data
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: 'Total Orders',
      value: '+2,350',
      change: '+12.5% from last month',
      isPositive: true,
      icon: ShoppingBag,
    },
    {
      title: 'Total Customers',
      value: '+12,234',
      change: '+4.2% from last month',
      isPositive: true,
      icon: Users,
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-0.8% from last month',
      isPositive: false,
      icon: TrendingUp,
    },
  ];

  // Recent Orders Data
  const recentOrders = [
    {
      id: '#ORD-9842',
      customer: 'Alex Johnson',
      product: 'Wireless Headphones',
      amount: '$129.00',
      status: 'Completed',
    },
    {
      id: '#ORD-9841',
      customer: 'Sarah Miller',
      product: 'Smart Watch Series 7',
      amount: '$299.00',
      status: 'Processing',
    },
    {
      id: '#ORD-9840',
      customer: 'David Smith',
      product: 'Ergonomic Office Chair',
      amount: '$245.50',
      status: 'Shipped',
    },
    {
      id: '#ORD-9839',
      customer: 'Emma Davis',
      product: 'Mechanical Keyboard',
      amount: '$85.00',
      status: 'Pending',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title Area */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
        <p className="text-sm text-slate-500">Here is what’s happening with your store today.</p>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">{stat.title}</span>
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                <p
                  className={`text-xs mt-1 flex items-center gap-1 ${stat.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {stat.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics & Quick Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Table (Takes up 2 columns on large screens) */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800">Recent Orders</h3>
            <span className="text-xs font-semibold text-indigo-600 cursor-pointer hover:underline">
              View All
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-2">Order ID</th>
                  <th className="py-3 px-2">Customer</th>
                  <th className="py-3 px-2">Product</th>
                  <th className="py-3 px-2">Amount</th>
                  <th className="py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {recentOrders.map((order, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-2 font-medium text-slate-700">{order.id}</td>
                    <td className="py-3 px-2 text-slate-600">{order.customer}</td>
                    <td className="py-3 px-2 text-slate-600">{order.product}</td>
                    <td className="py-3 px-2 font-semibold text-slate-800">{order.amount}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${
                          order.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-600'
                            : order.status === 'Processing'
                              ? 'bg-amber-50 text-amber-600'
                              : order.status === 'Shipped'
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-slate-100 text-slate-600'
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

        {/* Quick Inventory / Activity Card */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Inventory Alerts</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-rose-50 border border-rose-100 rounded-lg">
                <Package className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-rose-900">Low Stock Warning</h4>
                  <p className="text-xs text-rose-700 mt-0.5">
                    Wireless Earbuds stock is down to 4 units left.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-amber-900">Pending Approvals</h4>
                  <p className="text-xs text-amber-700 mt-0.5">
                    3 new customer product reviews awaiting moderation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors">
            Generate Full Report
          </button>
        </div>
      </div>
    </div>
  );
}
