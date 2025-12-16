import { colors, Grid, Grow } from "@mui/material";
import Recipe from "../components/Recipe";
import Header from "../components/Header";

const Favourite = () => {
  return (
    <>
      <Grid
      // sx={{backgroundColor:"#272222ff"}}
      >

      <Header
        favicon={
          <Grid
            component={"img"}
            src="/favouriteIcon2.png"
            marginRight={5}
            height={30}
          ></Grid>
        }
      />

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
                <Grid item xs={12} sm={6} md={3}>
                          <Recipe />
                        </Grid>
      </Grid>
      <Grid />
      </Grid>
    </>
  );
};

export default Favourite;
