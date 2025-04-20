export async function fetchHPCharacters() {
  const url = 'https://hp-api.onrender.com/api/characters';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
