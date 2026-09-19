import { useState } from 'react';
import { Heart, ShoppingCart, Trash2, Eye } from 'lucide-react';

export default function Wishlist() {
  // Wishlist er dumi data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Wireless Noise-Canceling Headphones',
      category: 'Electronics',
      price: '$299.00',
      stock: 'In Stock',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    },
    {
      id: 2,
      name: 'Smart Fitness Watch Series 5',
      category: 'Electronics',
      price: '$199.00',
      stock: 'In Stock',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    },
    {
      id: 3,
      name: 'Minimalist Leather Backpack',
      category: 'Fashion',
      price: '$89.00',
      stock: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    },
  ]);

  // Wishlist theke item remove korar function
  const handleRemove = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">My Wishlist</h1>
          <p className="text-sm text-slate-500">Items you have saved for future purchases.</p>
        </div>
        <div className="text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm inline-flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>Total Saved: {wishlistItems.length} items</span>
        </div>
      </div>

      {/* Wishlist Grid */}
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Product Image Area */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full text-rose-500 hover:bg-white hover:text-rose-600 shadow-sm transition-colors"
                    title="Remove from Wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span
                    className={`absolute bottom-3 left-3 px-2.5 py-1 text-xs font-medium rounded-full ${
                      item.stock === 'In Stock'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-rose-500 text-white'
                    }`}
                  >
                    {item.stock}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-800 text-base mt-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="mt-2 text-lg font-bold text-slate-900">{item.price}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  disabled={item.stock === 'Out of Stock'}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                    item.stock === 'In Stock'
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                <button
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-600 transition-colors"
                  title="View Product"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Your wishlist is empty</h3>
            <p className="text-sm text-slate-500 mt-1">
              Explore our products and save your favorite items here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
