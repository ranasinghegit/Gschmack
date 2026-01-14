import {
  Box,
  Button,
  Card,
  CardMedia,
  colors,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const StartPage = () => {
  const navigate = useNavigate();
  const ShowRecipe = () => {
    navigate("/homepage");
    console.log("button clicked!");
  };

  useEffect(() => {
    document.title = "GSCHMACK - Find Your Taste";
  }, []);

  return (
    <>
      <CssBaseline />

      <Grid
        sx={{
          backgroundColor: "#e9f4ecff",
        }}
      >
        <Header />
        <Grid
          container
          justifyContent={"center"}
          gap={5}
          sx={{
            mt: 5,
            pb: -3,
            flexDirection: { xs: "column", lg: "row", sm: "row" },
            alignContent: { xs: "center" },
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            sx={{
              backgroundColor: "#d356130f",
              // "& label": { color: "#838383ff" },
              boxShadow: 1,
            }}
          >
            <TextField fullWidth label="Ingredient 1" />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            sx={{
              backgroundColor: "#d356130f",
              // "& label": { color: "#838383ff" },
              boxShadow: 1,
            }}
          >
            <TextField fullWidth label="Ingredient 2" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            sx={{
              backgroundColor: "#d356130f",
              // "& label": { color: "#838383ff" },
              boxShadow: 1,
            }}
          >
            <TextField fullWidth label="Ingredient 3" />
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                height: "100%",
                backgroundColor: "#c47526a6",
                color: "white",
                "&:hover": {
                  backgroundColor: "#d15918c5",
                },
              }}
            >
              Show Recipes
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          container
          sx={{
            backgroundPosition: "center",
            minHeight: "10vh",
          }}
        ></Grid>

        {/*  */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <Card
            sx={{
              maxWidth: 210,
              m: 2,
              ml: 5,
              border: "1px solid #bcbabaff",
              boxShadow: 10,
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image="food1.jpg"
              alt="Sample Image"
            />
          </Card>
          <Card
            sx={{
              maxWidth: 210,
              m: 2,
              border: "1px solid #bcbabaff",
              boxShadow: 10,
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image="food3.jpeg"
              alt="Sample Image"
            />
          </Card>
          <Card
            sx={{
              maxWidth: 210,
              m: 2,
              border: "1px solid #bcbabaff",
              boxShadow: 10,
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image="food4.jpg"
              alt="Sample Image"
            />
          </Card>
          <Card
            sx={{
              maxWidth: 210,
              m: 2,
              border: "1px solid #bcbabaff",
              boxShadow: 10,
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image="food2.avif"
              alt="Sample Image"
            />
          </Card>
          <Card
            sx={{
              maxWidth: 210,
              m: 2,
              border: "1px solid #bcbabaff",
              boxShadow: 10,
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image="food5.jpeg"
              alt="Sample Image"
            />
          </Card>
        </Grid>

        {/*  */}
      </Grid>
    </>
  );
};

export default StartPage;
