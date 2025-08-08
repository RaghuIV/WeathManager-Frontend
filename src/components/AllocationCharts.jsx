import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import './AllocationCharts.css';

const COLORS = ['#9E7C47', '#CFAE6D', '#555555', '#999999', '#cccccc'];

const renderChart = (data, title) => {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value: value.value
  }));

  return (
    <div className="allocation-chart">
      <h4>{title}</h4>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={80}
            fill="#9E7C47"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const AllocationCharts = ({ allocation }) => {
  if (!allocation?.bySector || !allocation?.byMarketCap) return null;

  return (
    <div className="allocation-wrapper">
      {renderChart(allocation.bySector, 'Sector Allocation')}
      {renderChart(allocation.byMarketCap, 'Market Cap Allocation')}
    </div>
  );
};

export default AllocationCharts;
