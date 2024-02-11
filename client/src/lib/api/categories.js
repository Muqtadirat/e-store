const apiUrl = import.meta.env.VITE_POSTMAN_API_URL

export default async function FetchCategories() {
  try {
    // const res = await fetch("http://localhost:5000/v1/categories"); //Backend url
    const res = await fetch(`${apiUrl}categories`)
    const data = res.json();
   
    return data;
  } catch (error) {
    console.error("Error fetching data...");
  }
}
