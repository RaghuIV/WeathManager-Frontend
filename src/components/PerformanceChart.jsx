import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts';
import './PerformanceChart.css';

const PerformanceChart = ({ performance }) => {
  if (!performance?.timeline?.length) return null;

  return (
    <div className="performance-chart-wrapper">
      <h4>Performance Comparison</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={performance.timeline}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="portfolio" stroke="#9E7C47" strokeWidth={2} />
          <Line type="monotone" dataKey="nifty50" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="gold" stroke="#ffbb28" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <div className="returns-summary">
        <div>
          <strong>1 Month:</strong> {performance.returns.portfolio['1month']}%
          vs Nifty: {performance.returns.nifty50['1month']}%
          vs Gold: {performance.returns.gold['1month']}%
        </div>
        <div>
          <strong>3 Months:</strong> {performance.returns.portfolio['3months']}%
          vs Nifty: {performance.returns.nifty50['3months']}%
          vs Gold: {performance.returns.gold['3months']}%
        </div>
        <div>
          <strong>1 Year:</strong> {performance.returns.portfolio['1year']}%
          vs Nifty: {performance.returns.nifty50['1year']}%
          vs Gold: {performance.returns.gold['1year']}%
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
