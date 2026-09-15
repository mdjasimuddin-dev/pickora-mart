import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
  PieChart,
  BarChart2,
} from 'lucide-react';

export default function AdminAnalytics() {
  // অ্যানালিটিক্স সামারি কার্ড ডেটা
  const metrics = [
    {
      title: 'Net Revenue',
      value: '$128,430.00',
      change: '+14.2%',
      isPositive: true,
      icon: DollarSign,
    },
    { title: 'Total Orders', value: '4,840', change: '+8.1%', isPositive: true, icon: ShoppingBag },
    { title: 'New Customers', value: '+1,240', change: '-2.4%', isPositive: false, icon: Users },
    {
      title: 'Conversion Rate',
      value: '3.6%',
      change: '+0.5%',
      isPositive: true,
      icon: TrendingUp,
    },
  ];

  // টপ সেলিং প্রোডাক্টস ডেটা
  const topProducts = [
    {
      name: 'Wireless Noise-Canceling Headphones',
      category: 'Electronics',
      sales: '1,240 units',
      revenue: '$37,000',
    },
    { name: 'Smart Watch Series 7', category: 'Wearables', sales: '980 units', revenue: '$29,400' },
    {
      name: 'Ergonomic Office Chair',
      category: 'Furniture',
      sales: '650 units',
      revenue: '$22,750',
    },
    {
      name: 'Minimalist Leather Backpack',
      category: 'Accessories',
      sales: '520 units',
      revenue: '$15,600',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
      {/* Top Header & Export Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Analytics & Reports</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Monitor your store’s financial performance, sales trends, and top products.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Last 30 Days</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs sm:text-sm font-medium shadow-sm transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">{item.title}</span>
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-slate-800">{item.value}</h3>
                <p
                  className={`text-xs mt-1 flex items-center gap-1 font-medium ${item.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}
                >
                  {item.isPositive ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {item.change} <span className="text-slate-400 font-normal">vs last month</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Sales Chart */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800">Revenue Overview</h3>
              <p className="text-xs text-slate-400">Monthly earnings performance</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-indigo-600 rounded-full inline-block"></span> Revenue
              </span>
            </div>
          </div>

          {/* Visual Chart Placeholder Area */}
          <div className="h-64 sm:h-72 w-full bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400">
            <BarChart2 className="w-12 h-12 text-slate-300 mb-2" />
            <p className="text-sm font-medium">Interactive Sales Graph / Chart</p>
            <p className="text-xs text-slate-400">(Integrate Chart.js or Recharts here)</p>
          </div>
        </div>

        {/* Sales by Category Card */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-800">Sales by Category</h3>
              <PieChart className="w-5 h-5 text-slate-400" />
            </div>
            <p className="text-xs text-slate-400 mb-6">Distribution across product types</p>

            {/* Category Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Electronics</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Wearables</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Furniture</span>
                  <span>20%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full"
                    style={{ width: '20%' }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Accessories</span>
                  <span>10%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products Table Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-800">Top Performing Products</h3>
          <span className="text-xs font-semibold text-indigo-600 cursor-pointer hover:underline">
            View All
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-3">Product Name</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Total Sales</th>
                <th className="py-3 px-3 text-right">Revenue Generated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {topProducts.map((product, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-3 font-medium text-slate-800">{product.name}</td>
                  <td className="py-3 px-3">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-600">{product.sales}</td>
                  <td className="py-3 px-3 text-right font-semibold text-slate-800">
                    {product.revenue}
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
