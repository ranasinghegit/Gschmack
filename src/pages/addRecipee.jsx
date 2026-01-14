import { Grid, TextField, Button, MenuItem } from "@mui/material";
import axios from "axios";
import Recipe from "../components/Recipe";

import { useEffect, useState } from "react";
import { AlignVerticalCenter } from "@mui/icons-material";
import RecipeReviewCard from "../components/Recipe";

export default function Example() {
  const [users, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
    method: "",
    img: "",
  });

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

  const handleEditClick = (recipe) => {
    setSelectedRecipe(recipe);
    setFormData({
      name: recipe.name,
      country: recipe.country,
      description: recipe.description,
      method: recipe.method,
      img: recipe.img,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://127.0.0.1:3001/api/updateuser/${selectedRecipe._id}`,
        formData
      );
      alert("Recipe updated!");
      setSelectedRecipe(null);
      fetchRecipes();
    } catch (err) {
      console.error(err);
      alert("Update failed!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    try {
      await axios.delete("http://127.0.0.1:3001/api/deleteuser", {
        data: { _id: id },
      });

      alert("Recipe deleted!");
      fetchRecipes();
    } catch (err) {
      console.error(err);
      alert("Delete failed!");
    }
  };

  const [recipe, setRecipe] = useState({
    // id: "",
    name: "",
    description: "",
    method: "",
    img: "",
  });

  const addhandleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:3001/api/createuser",
        recipe
      );
      console.log("Saved:", res.data);
      alert("Recipe added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding recipe");
    }
  };
  //

  const [showFields, setShowFields] = useState(false);

  return (
    <>
      <div>
        <Button
          variant="contained"
          onClick={() => setShowFields((prev) => !prev)}
        >
          +
        </Button>

        {showFields && (
          <>
            <Grid justifyItems={"center"} sx={{ mt: 5 }}>
              <Grid item xs={12} sm={6} mt={2} width={500}>
                <TextField
                  fullWidth
                  label="Recipe Name"
                  name="name"
                  value={recipe.name}
                  onChange={addhandleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} mt={2} width={500}>
                <TextField
                  fullWidth
                  label="Born Country"
                  name="country"
                  value={recipe.country}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} mt={2} width={500}>
                <TextField
                  multiline
                  fullWidth
                  label="Description"
                  name="description"
                  value={recipe.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} mt={2} width={500}>
                <TextField
                  multiline
                  fullWidth
                  label="Method"
                  name="method"
                  value={recipe.method}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} mt={2} width={500}>
                <TextField
                  fullWidth
                  label="Image Link"
                  name="img"
                  value={recipe.img}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} textAlign="center" mt={2}>
                <Button variant="contained" onClick={handleSubmit}>
                  Add Recipe
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </div>

      <div>
        {selectedRecipe && (
          <div
            style={{
              marginBottom: 20,
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <h3>Edit Recipe</h3>
            <TextField
              label="Recipe Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Method"
              name="method"
              value={formData.method}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Image Link"
              name="img"
              value={formData.img}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
            <Button
              variant="outlined"
              onClick={() => setSelectedRecipe(null)}
              sx={{ ml: 2 }}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>

      <Grid container spacing={2} sx={{ mt: 5 }} justifyContent="center">
        {users.map((r) => (
          <Grid item xs={12} sm={6} md={4} key={r._id}>
            <RecipeReviewCard
              recipe={r}
              showActions={true}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
