import React, { useEffect, useState } from 'react';
import OverviewCards from '../components/OverviewCards';
import AllocationCharts from '../components/AllocationCharts';

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
      setHoldings(h);
      setAllocation(a);
      setPerformance(p);
      setSummary(s);
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: 'var(--white)', color: 'var(--black)' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '30px' }}>
        Portfolio Dashboard
      </h1>

      <OverviewCards summary={summary} holdings={holdings} />
      <AllocationCharts allocation={allocation} />
    </div>
  );
};

export default Dashboard;
