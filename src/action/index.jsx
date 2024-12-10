export const fetchProducts = async (category) => {
  try {
    const response = await fetch(`http://localhost:3001/${category}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${category} products:`, error);
    return [];
  }
};
