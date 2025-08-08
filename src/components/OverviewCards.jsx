import React from 'react';
import './OverviewCards.css';

const OverviewCards = ({ summary, holdings }) => {
  if (!summary || !Array.isArray(holdings)) return null;

  const {
    totalValue,
    totalGainLoss,
    totalGainLossPercent
  } = summary;

  const gainColor = totalGainLoss >= 0 ? 'green' : 'red';

  return (
    <div className="overview-grid">
      <div className="card primary-card">
        <h4>Total Portfolio Value</h4>
        <p>₹{totalValue.toLocaleString()}</p>
      </div>

      <div className="card">
        <h4>Total Gain / Loss</h4>
        <p style={{ color: gainColor }}>
          ₹{totalGainLoss.toLocaleString()}
        </p>
      </div>

      <div className="card">
        <h4>Gain / Loss %</h4>
        <p style={{ color: gainColor }}>
          {totalGainLossPercent.toFixed(2)}%
        </p>
      </div>

      <div className="card">
        <h4>Number of Holdings</h4>
        <p>{holdings.length} Holdings</p>
      </div>
    </div>
  );
};

export default OverviewCards;
