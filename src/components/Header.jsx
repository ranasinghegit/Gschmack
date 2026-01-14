import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "black",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid rgba(0, 0, 0, 0.2)",

  // backgroundColor:'#d56d35a8',
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
    backgroundColor: "#d56d3513",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#d56e35",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ favicon }) {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/favourite");
    console.log("Image clicked!");
  };
  const handleClick2 = () => {
    Navigate("/homepage");
    console.log("Image clicked!");
  };

  return (
    <Box sx={{ flexGrow: 1, pt: 2 }}>
      <div>
        <AppBar
          position="static"
          // justifyContent='center'
          // alignItems='center'
          // justifyItems="center"

          sx={{
            // borderRadius:1,

            height: 120,
            backgroundColor: "#ffffffff",
          }}
        >
          <Toolbar>
            <Box
              component={"img"}
              src="/plate3.png"
              alt="logo"
              sx={{
                height: 100,
                mt: 1,
                display: {
                  // xs:'block',md:'none',lg:'block'
                },
              }}
              marginRight={5}
              onClick={handleClick2}
            ></Box>
            <Box
              component={"img"}
              src="./gschmack.png"
              alt="logo"
              sx={{
                height: { lg: 80, md: 60 },
                display: {
                  xs: "none",
                  md: "block",
                  lg: "block",
                },
              }}
              marginRight={5}
              // onClick={handleClick2}
            ></Box>

            {favicon ? (
              favicon
            ) : (
              <Grid
                component={"img"}
                src="/favouriteIcon.png"
                height={30}
                sx={{
                  position: "absolute",
                  right: {
                    xs: 280,
                    sm: 300,
                    md: 325,
                    lg: 420,
                    xl: 450,
                  },
                }}
                onClick={handleClick}
              ></Grid>
            )}

            <Search
              sx={{
                position: "absolute",
                width: {
                  xs: 200,
                  sm: 250,
                  md: 250,
                  lg: 350,
                  xl: 400,
                },
                right: {
                  xs: 15,
                  sm: 15,
                  md: 20,
                  lg: 30,
                  xl: 40,
                },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
}
