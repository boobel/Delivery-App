import { resultProps } from "../interfaces/shopModels";

const fetchMeals = async (setResult: React.Dispatch<React.SetStateAction<resultProps[]>>): Promise<void> => {
      const db = await fetch("http://localhost:3000/meals");
      const data = await db.json();
      setResult(data)
  };
  
export {fetchMeals}