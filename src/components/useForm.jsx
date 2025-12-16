import Header from "../components/Header";

const useForm = (props) => {
  return (
    <>
    <Header/>
    
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "white",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography component="h1" variant="h4">
          Select Your Ingredients
        </Typography>
      </Grid>
    </Grid>
  </>
  );
};

export default useForm;