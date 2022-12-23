const fetchMeals = async () => {
    try {
      const db = await fetch("http://localhost:3000/meals");
      const data = await db.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  
export {fetchMeals}