import React, { useEffect, useState } from 'react';
import OverviewCards from '../components/OverviewCards';
import AllocationCharts from '../components/AllocationCharts';
import HoldingsTable from '../components/HoldingsTable';
import PerformanceChart from '../components/PerformanceChart';
import TopPerformers from '../components/TopPerformers';

import {
  getHoldings,
  getAllocation,
  getPerformance,
  getSummary
} from '../routes/api';

const Dashboard = () => {
  const [holdings, setHoldings] = useState([]);
  const [allocation, setAllocation] = useState({});
  const [performance, setPerformance] = useState({});
  const [summary, setSummary] = useState({});

  useEffect(() => {
    async function loadData() {
      const [h, a, p, s] = await Promise.all([
        getHoldings(),
        getAllocation(),
        getPerformance(),
        getSummary()
      ]);

      console.log('🔍 Holdings:', h);             // 👈 check this
    console.log('✅ Holdings Count:', h.length); // 👈 should show 15

    
      setHoldings(h);
      setAllocation(a);
      setPerformance(p);
      setSummary(s);
    }

    loadData();
  }, []);

  const isLoading =
    !summary ||
    !allocation?.bySector ||
    !performance?.timeline ||
    holdings.length === 0;

  return (
    <div style={{ padding: '20px', backgroundColor: 'var(--white)', color: 'var(--black)' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '30px', textAlign: 'center' }}>
        Portfolio Dashboard
      </h1>

      {isLoading ? (
        <p style={{ fontSize: '16px', textAlign: 'center', marginTop: '50px' }}>
          Loading portfolio data...
        </p>
      ) : (
        <>
          <OverviewCards summary={summary} holdings={holdings} />
          <AllocationCharts allocation={allocation} />
          <HoldingsTable data={holdings} />
          <PerformanceChart performance={performance} />
          <TopPerformers summary={summary} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
