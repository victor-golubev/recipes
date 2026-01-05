const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

const CACHE_TTL = 1000 * 60 * 60; // 1 час

export async function getRecipes(query) {
  const cacheKey = `recipes_${query}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);

    if (Date.now() - timestamp < CACHE_TTL) {
      return data;
    }
  }

  const res = await fetch(
    `${BASE_URL}/recipes/complexSearch?query=${query}&number=10&apiKey=${API_KEY}`
  );

  const data = await res.json();

  localStorage.setItem(
    cacheKey,
    JSON.stringify({ data, timestamp: Date.now() })
  );

  return data;
}
