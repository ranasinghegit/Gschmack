import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function UpdateUser({ user, onUpdated }) {
  const [form, setForm] = useState({
    name: user.name,
    description: user.description,
    method: user.method,
    img: user.img,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/users/${user._id}`,
        form
      );
      onUpdated(); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid

      justifyContent="center"
      sx={{ mt: 5 ,width:700}}
    >

        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Recipe Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </Grid>
         <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Born Country"
          name="country"
          value={recipe.country}
          onChange={handleChange}
        />
      </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={recipe.description}
          onChange={handleChange}
        />
      </Grid>
       <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Method"
          name="method"
          value={recipe.method}
          onChange={handleChange}
        />
      </Grid>
       <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Image Link"
          name="img"
          value={recipe.img}
          onChange={handleChange}
        />
      </Grid>

      

      

      <Grid item xs={12} textAlign="center">
        <button onClick={handleUpdate}>
        Update
      </button>
      </Grid>
    </Grid>
  );
}

export default UpdateUser;
