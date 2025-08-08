import React from 'react';
import './TopPerformers.css';

const TopPerformers = ({ summary }) => {
  if (!summary?.topPerformer || !summary?.worstPerformer) return null;

  const { topPerformer, worstPerformer, diversificationScore, riskLevel } = summary;

  return (
    <div className="top-performers-wrapper">
      <h4>Top & Worst Performers</h4>
      <div className="top-worst-grid">
        <div className="perf-card green-card">
          <h5>Top Performer</h5>
          <p>{topPerformer.name} ({topPerformer.symbol})</p>
          <span>{topPerformer.gainPercent}%</span>
        </div>

        <div className="perf-card red-card">
          <h5>Worst Performer</h5>
          <p>{worstPerformer.name} ({worstPerformer.symbol})</p>
          <span>{worstPerformer.gainPercent}%</span>
        </div>

        <div className="perf-card neutral-card">
          <h5>Diversification Score</h5>
          <p>{diversificationScore} / 10</p>
        </div>

        <div className="perf-card neutral-card">
          <h5>Risk Level</h5>
          <p>{riskLevel}</p>
        </div>
      </div>
    </div>
  );
};

export default TopPerformers;
