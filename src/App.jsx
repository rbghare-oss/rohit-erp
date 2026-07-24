import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('product');
  const [fromDate, setFromDate] = useState('2026-07-01');
  const [toDate, setToDate] = useState('2026-07-24');

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f1f5f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header */}
      <header style={{ backgroundColor: '#047857', color: 'white', padding: '16px 24px', width: '100%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Rootwell Pharma</h1>
            <p style={{ fontSize: '12px', color: '#a7f3d0', margin: '2px 0 0 0' }}>Rohit ERP - Management System</p>
          </div>
          <span style={{ backgroundColor: '#065f46', border: '1px solid #059669', fontSize: '12px', padding: '4px 12px', borderRadius: '9999px' }}>v1.0 Active</span>
        </div>
      </header>

      {/* Main Layout Container */}
      <div style={{ display: 'flex', maxWidth: '1280px', width: '100%', margin: '24px auto', padding: '0 16px', gap: '24px', flex: 1 }}>
        
        {/* Left Sidebar */}
        <div style={{ width: '260px', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '16px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => setActiveTab('dashboard')} style={btnStyle(activeTab === 'dashboard')}>📊 Dashboard</button>
          <button onClick={() => setActiveTab('billing')} style={btnStyle(activeTab === 'billing')}>🧾 GST Billing</button>
          <button onClick={() => setActiveTab('product')} style={btnStyle(activeTab === 'product')}>📦 Product & Stock Report</button>
          <button onClick={() => setActiveTab('customer')} style={btnStyle(activeTab === 'customer')}>👤 Customer Master</button>
          <button onClick={() => setActiveTab('supplier')} style={btnStyle(activeTab === 'supplier')}>🚛 Supplier Master</button>
          <button onClick={() => setActiveTab('purchase')} style={btnStyle(activeTab === 'purchase')}>🛒 Purchase Management</button>
          <button onClick={() => setActiveTab('accounts')} style={btnStyle(activeTab === 'accounts')}>💳 Accounts & Payments</button>
          <button onClick={() => setActiveTab('expiry')} style={btnStyle(activeTab === 'expiry')}>⚠️ Expiry Alert & Report</button>
        </div>

        {/* Right Main Content */}
        <main style={{ flex: 1 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '24px' }}>
            
            {/* PRODUCT REPORT PAGE */}
            {activeTab === 'product' && (
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>📦 Product Sale & Closing Stock Summary</h2>
                <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>Filter sales and closing stock valuation by date range.</p>

                {/* 📅 DATE FILTER BOX */}
                <div style={{ backgroundColor: '#f8fafc', border: '2px solid #059669', padding: '16px', borderRadius: '10px', display: 'flex', gap: '16px', alignItems: 'flex-end', marginBottom: '24px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#047857', marginBottom: '6px' }}>📅 From Date (कुठून)</label>
                    <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={inputStyle} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#047857', marginBottom: '6px' }}>📅 To Date (कुठंपर्यंत)</label>
                    <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={inputStyle} />
                  </div>
                  <button style={{ backgroundColor: '#059669', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
                    🔍 Filter Report
                  </button>
                </div>

                {/* Stat Summary Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
                  <div style={cardBox('#eff6ff', '#bfdbfe')}><div style={{ fontSize: '11px', fontWeight: 'bold', color: '#2563eb' }}>TOTAL SALE QUANTITY</div><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1d4ed8', marginTop: '4px' }}>580 Qty</div></div>
                  <div style={cardBox('#faf5ff', '#e9d5ff')}><div style={{ fontSize: '11px', fontWeight: 'bold', color: '#9333ea' }}>TOTAL SALE VALUE</div><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#7e22ce', marginTop: '4px' }}>₹ 22,540</div></div>
                  <div style={cardBox('#f0fdf4', '#bbf7d0')}><div style={{ fontSize: '11px', fontWeight: 'bold', color: '#16a34a' }}>TOTAL CLOSING QUANTITY</div><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#15803d', marginTop: '4px' }}>445 Qty</div></div>
                  <div style={cardBox('#fffbeb', '#fde68a')}><div style={{ fontSize: '11px', fontWeight: 'bold', color: '#d97706' }}>TOTAL CLOSING VALUE</div><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#b45309', marginTop: '4px' }}>₹ 21,870</div></div>
                </div>

                {/* Table */}
                <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                        <th style={thStyle}>Medicine Name</th>
                        <th style={thStyle}>Sale Quantity</th>
                        <th style={thStyle}>Sale Value (₹)</th>
                        <th style={thStyle}>Closing Quantity</th>
                        <th style={thStyle}>Closing Value (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>Paracetamol 650mg</td>
                        <td style={{ padding: '12px', color: '#2563eb', fontWeight: 'bold' }}>80 Qty</td>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>₹ 2,280.00</td>
                        <td style={{ padding: '12px', color: '#16a34a', fontWeight: 'bold' }}>120 Qty</td>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>₹ 2,700.00</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>Amoxicillin 500mg</td>
                        <td style={{ padding: '12px', color: '#2563eb', fontWeight: 'bold' }}>105 Qty</td>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>₹ 7,560.00</td>
                        <td style={{ padding: '12px', color: '#dc2626', fontWeight: 'bold' }}>45 Qty</td>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>₹ 2,610.00</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>Azithromycin 250mg</td>
                        <td style={{ padding: '12px', color: '#2563eb', fontWeight: 'bold' }}>150 Qty</td>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>₹ 14,700.00</td>
                        <td style={{ padding: '12px', color: '#16a34a', fontWeight: 'bold' }}>200 Qty</td>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>₹ 15,600.00</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>Cetirizine 10mg</td>
                        <td style={{ padding: '12px', color: '#2563eb', fontWeight: 'bold' }}>245 Qty</td>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>₹ 2,940.00</td>
                        <td style={{ padding: '12px', color: '#16a34a', fontWeight: 'bold' }}>80 Qty</td>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>₹ 960.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab !== 'product' && (
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'capitalize' }}>{activeTab} Section</h2>
                <p style={{ color: '#64748b', marginTop: '8px' }}>Select 'Product & Stock Report' from the left sidebar to view the Date Filtered stock summary.</p>
              </div>
            )}

          </div>
        </main>

      </div>
    </div>
  );
}

const btnStyle = (active) => ({
  border: 'none',
  backgroundColor: active ? '#059669' : 'transparent',
  color: active ? 'white' : '#475569',
  padding: '12px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: active ? 'bold' : '500',
  textAlign: 'left',
  width: '100%',
  cursor: 'pointer'
});

const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  borderRadius: '6px',
  border: '1px solid #cbd5e1',
  fontSize: '14px',
  outline: 'none'
};

const thStyle = {
  padding: '12px',
  fontSize: '12px',
  color: '#475569',
  textTransform: 'uppercase'
};

const cardBox = (bg, border) => ({
  backgroundColor: bg,
  borderColor: border,
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: '18px',
  borderRadius: '10px'
});
