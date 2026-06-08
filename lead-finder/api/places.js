export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const API_KEY = process.env.GOOGLE_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'API key non configurata' });

  const { endpoint, ...params } = req.query;
  const allowed = ['nearbysearch', 'details', 'geocode'];
  if (!allowed.includes(endpoint)) return res.status(400).json({ error: 'Endpoint non valido' });

  let url;
  if (endpoint === 'geocode') {
    url = `https://maps.googleapis.com/maps/api/geocode/json?${new URLSearchParams({ ...params, key: API_KEY })}`;
  } else {
    url = `https://maps.googleapis.com/maps/api/place/${endpoint}/json?${new URLSearchParams({ ...params, key: API_KEY })}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'Errore chiamata Google API: ' + e.message });
  }
}
