import { resultProps } from "../interfaces/shopModels";

const fetchMeals = async (setResult: React.Dispatch<React.SetStateAction<resultProps[]>>): Promise<any> => {
      const db = await fetch("http://localhost:3000/meals");
      const data = await db.json();
      setResult(data)
      return data;
  };
  
export {fetchMeals}