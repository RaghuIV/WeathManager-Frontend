const BASE_URL = 'https://weathmanager-backend.onrender.com';

export async function getHoldings() {
  const res = await fetch(`${BASE_URL}holdings`);
  return res.json();
}

export async function getAllocation() {
  const res = await fetch(`${BASE_URL}allocation`);
  return res.json();
}

export async function getPerformance() {
  const res = await fetch(`${BASE_URL}performance`);
  return res.json();
}

export async function getSummary() {
  const res = await fetch(`${BASE_URL}summary`);
  return res.json();
}
