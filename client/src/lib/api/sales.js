const apiUrl = import.meta.env.VITE_POSTMAN_API_URL;

export default async function FetchSales() {
  try {
    const res = await fetch(`${apiUrl}sales`);
    const data = res.json();

    return data;
  } catch (error) {
    console.error("Error fetching sales...");
  }
}
