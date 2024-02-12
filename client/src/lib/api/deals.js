const apiUrl = import.meta.env.VITE_POSTMAN_API_URL;

export default async function FetchDeals() {
  try {
    const res = await fetch(`${apiUrl}deals`);
    const data = res.json();

    return data;
  } catch (error) {
    console.error("Error fetching deals...");
  }
}
