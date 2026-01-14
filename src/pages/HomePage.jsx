import { Box, Button, CssBaseline, Grid, TextField } from "@mui/material";
import Header from "../components/Header";
import Recipe from "../components/Recipe";
import { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
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
    <>
      <CssBaseline />
      <Grid sx={{ backgroundColor: "#e9f4ecff" }}>
        <Header />

        <Grid
          container
          justifyContent={"center"}
          gap={5}
          sx={{
            mt: 2,
            flexDirection: { xs: "column", lg: "row", sm: "row" },
            alignContent: { xs: "center" },
          }}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <TextField fullWidth label="Recipe 1" />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <TextField fullWidth label="Recipe 2" />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <TextField fullWidth label="Recipe 3" />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                height: "100%",
                backgroundColor: "#d37f1f7f",
                color: "white",
                "&:hover": {
                  backgroundColor: "#d37f1fff",
                },
              }}
            >
              Change
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 5 }} justifyContent="center">
          {users.map((r) => (
            <Grid item xs={12} sm={6} md={4} key={r._id}>
              <Recipe recipe={r} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Homepage;
