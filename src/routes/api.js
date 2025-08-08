const BASE_URL = 'http://127.0.0.1:8000/api/portfolio/';

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
