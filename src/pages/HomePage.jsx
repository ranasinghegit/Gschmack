import { Box, Button, Grid, TextField } from "@mui/material";
import Header from "../components/Header";
import Recipe from "../components/Recipe";

const Homepage = () => {
  return (
    <Grid>
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
              backgroundColor: "#076b21ff",
              color: "white",
              "&:hover": {
                backgroundColor: "#045527ff",
              },
            }}
          >
            Change
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 5 }} justifyContent={"center"}>
        <Grid item xs={12} sm={6} md={3}>
          <Recipe />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Recipe />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Recipe />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Recipe />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
