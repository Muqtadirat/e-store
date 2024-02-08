export default async function FetchCategories() {
  try {
    const res = await fetch("http://localhost:5000/v1/categories");
    const data = res.json();
   
    return data;
  } catch (error) {
    console.error("Error fetching data...");
  }
}

