import React, { useState } from 'react';
import './HoldingsTable.css';

const HoldingsTable = ({ data }) => {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const filtered = data
  .filter(item => {
    const symbol = item.symbol?.toLowerCase() || '';
    const name = item.name?.toLowerCase() || '';
    const keyword = search.toLowerCase().trim();
    return symbol.includes(keyword) || name.includes(keyword);
  })
  .sort((a, b) => {
    if (!sortField) return 0;
    const valA = a[sortField];
    const valB = b[sortField];
    return sortAsc ? valA - valB : valB - valA;
  });

  return (
    <div className="holdings-table-wrapper">
      <h4>Holdings</h4>
      <input
        type="text"
        placeholder="Search by name or symbol..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="table-scroll">
        <table className="holdings-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('symbol')}>Symbol</th>
              <th>Name</th>
              <th onClick={() => handleSort('quantity')}>Qty</th>
              <th>Avg Price</th>
              <th>Current Price</th>
              <th onClick={() => handleSort('value')}>Value</th>
              <th onClick={() => handleSort('gainLoss')}>Gain/Loss</th>
              <th onClick={() => handleSort('gainLossPercent')}>Gain %</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((stock, i) => (
              <tr key={i}>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>{stock.quantity}</td>
                <td>₹{stock.avgPrice.toFixed(2)}</td>
                <td>₹{stock.currentPrice.toFixed(2)}</td>
                <td>₹{stock.value.toFixed(2)}</td>
                <td style={{ color: stock.gainLoss >= 0 ? 'green' : 'red' }}>
                  ₹{stock.gainLoss.toFixed(2)}
                </td>
                <td style={{ color: stock.gainLossPercent >= 0 ? 'green' : 'red' }}>
                  {stock.gainLossPercent.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoldingsTable;
