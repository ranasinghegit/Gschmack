import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "../components/Recipe";

function RecipeList() {
  const [users, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:3001/api/users");
      setRecipes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div>
    //   {users.map((r) => (
    //     <div key={r._id}>
    //       <h3>{r.name}</h3>
    //       <p>{r.description}</p>
    //       <p>{r.method}</p>
    //       <p>{r.img}</p>

    //     </div>
    //   ))}
    // </div>

     <div>
      {users.map((r) => (
        <Recipe key={r._id} recipe={r} />
      ))}
    </div>




  );
  
}

export default RecipeList;
