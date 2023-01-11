const fetchMeals = async () => {
      const db = await fetch("http://localhost:3000/meals");
      const data = await db.json();
      return data;
  };
  
export {fetchMeals}