import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
// import AddRecipe from "../components/AddRecipe";
import { useNavigate } from "react-router-dom";





const StartPage = () => {


  const navigate = useNavigate();
  const ShowRecipe = () => {
    navigate("/homepage");
    console.log("button clicked!");
  };

  return (
    <>
    <Header/>
    
    <Grid
      item
      xs={12}
      sm={8}
      md={6}
      container
      sx={{
        backgroundImage: 'url("vegBack.jpg")',
        // backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "10vh",
      }}
    >
      
      <Box
        // border={2}
        backgroundColor="#d8e1d2ff"
        m={5}
        // justifyContent="center"
        justifyItems="center"
        // alignItems="center"
        width={500}
        sx={{
          backgroundColor: "rgba(26, 87, 42, 0.7)",
          borderRadius: 5,
          mx: "auto",
          color: "#fff",
        }}
      >
        <Typography variant="h4" marginTop={5}>
          Add What You Have
        </Typography>

        <Grid
          display="flex"
          flexDirection="column"
          gap={5}
          width={300}
          m={5}
          //  sx={{color: "white",}}
        >
          <TextField
            id="standard-basic"
            label="Recipe 1"
            variant="standard"
            sx={{
              "& label": { color: "white" },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
            }}
          />
          <TextField
            id="standard-basic"
            label="Recipe 2"
            variant="standard"
            sx={{
              "& label": { color: "white" },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
            }}
          />
          <TextField
            id="standard-basic"
            label="Recipe 3"
            variant="standard"
            sx={{
              "& label": { color: "white" },
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
            }}
          />
        </Grid>

        <Grid p={1} m={1}
        onClick={ShowRecipe}
        >
          <Button
            // onClick={() => navigate("/table")}
            
            sx={{
              backgroundColor: "#076b21ff",
              color: "white",
              "&:hover": {
                backgroundColor: "#e64a19",
              },
            }}
            variant="contained"
            >
            Show Recipe
          </Button>
        </Grid>
      </Box>
      
      
    </Grid>
    </>
  );
};

export default StartPage;
