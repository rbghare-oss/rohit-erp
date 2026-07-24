import React from 'react';

export default function App() {
  const expiryData = [
    { name: 'Paracetamol 650mg', batch: 'B204', stock: '120 Qty', date: '2026-08-15', status: 'Expiring Soon', color: 'bg-amber-100 text-amber-800 border-amber-300' },
    { name: 'Amoxicillin 500mg', batch: 'AM99', stock: '45 Qty', date: '2026-06-30', status: 'Expired', color: 'bg-red-100 text-red-800 border-red-300' },
    { name: 'Azithromycin 250mg', batch: 'AZ12', stock: '200 Qty', date: '2027-01-10', status: 'Safe', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
    { name: 'Cetirizine 10mg', batch: 'CT88', stock: '80 Qty', date: '2026-08-01', status: 'Expiring Soon', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <header className="bg-emerald-700 text-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Rootwell Pharma</h1>
            <p className="text-xs text-emerald-100">Rohit ERP - Management System</p>
          </div>
          <span className="bg-emerald-800 text-xs px-3 py-1 rounded-full border border-emerald-600">v1.0 Active</span>
        </div>
      </header>

      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto flex space-x-2 p-2 overflow-x-auto text-sm font-medium">
          {['GST Billing', 'Product Master', 'Customer Master', 'Supplier Master', 'Purchase Management'].map((tab) => (
            <button key={tab} className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100">
              {tab}
            </button>
          ))}
          <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow-sm">
            ⚠️ Expiry Alert & Report
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-1">⚠️ Expiry Alert & Report</h2>
          <p className="text-slate-500 text-sm mb-6">Monitor expired and near-expiry medicine inventory in real-time.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-red-50 border border-red-200">
              <span className="text-xs text-red-600 font-bold uppercase">Expired Stock</span>
              <p className="text-2xl font-bold text-red-700 mt-1">1 Items</p>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
              <span className="text-xs text-amber-600 font-bold uppercase">Near Expiry</span>
              <p className="text-2xl font-bold text-amber-700 mt-1">2 Items</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 font-bold uppercase">Total Tracked Stock</span>
              <p className="text-2xl font-bold text-slate-700 mt-1">4 Items</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b text-slate-600 text-xs uppercase font-semibold">
                  <th className="p-3">Medicine Name</th>
                  <th className="p-3">Batch No</th>
                  <th className="p-3">Remaining Stock</th>
                  <th className="p-3">Expiry Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {expiryData.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition">
                    <td className="p-3 font-semibold text-slate-800">{item.name}</td>
                    <td className="p-3 font-mono text-slate-600">{item.batch}</td>
                    <td className="p-3 text-slate-700">{item.stock}</td>
                    <td className="p-3 text-slate-600">{item.date}</td>
                    <td className="p-3">
                      <span className={px-2.5 py-1 text-xs font-semibold rounded-full border ${item.color}}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}