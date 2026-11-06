"use client";

import { Package, TrendingUp, AlertTriangle } from "lucide-react";

export default function VendorDashboard() {
  const expiringItems: any[] = [];
  const inventoryItems: any[] = [];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-slate-400 mb-1">Vendor Terminal</p>
          <h1 className="text-4xl font-bold text-white tracking-tight">Inventory Manager</h1>
          <p className="text-sm text-slate-400 mt-2">Manage stock, track sales, and donate surplus.</p>
        </div>
        <button className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <Package className="w-4 h-4" /> Add New Item
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-rose-500" />
            <h3 className="text-sm font-medium text-slate-400">Total Sales Today</h3>
          </div>
          <p className="text-3xl font-bold text-white">₹ 0</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-5 h-5 text-amber-300" />
            <h3 className="text-sm font-medium text-slate-400">Items in Stock</h3>
          </div>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h3 className="text-sm font-medium text-slate-400">Expiring Soon</h3>
          </div>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
      </div>

      {/* Expiry Alert Section */}
      <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-slate-500" />
          <h2 className="text-lg font-bold text-white">Action Required: Expiring Inventory</h2>
        </div>
        {expiringItems.length === 0 ? (
          <div className="text-center py-8 bg-white/5 rounded-xl border border-white/5">
            <p className="text-sm text-slate-400">No items expiring soon. Your inventory is fresh!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
        )}
      </div>

      {/* Live Inventory Table */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Live Inventory</h2>
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-white/5 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-6 py-4 font-medium">Item Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Price (₹)</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {inventoryItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    <Package className="w-8 h-8 mx-auto mb-3 opacity-50" />
                    No inventory added yet. Click "Add New Item" to get started.
                  </td>
                </tr>
              ) : (
                // Map real items here
                null
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}