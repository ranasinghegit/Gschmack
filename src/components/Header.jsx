import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({favicon}) {

  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/favourite")
    console.log("Image clicked!");
  };
  const handleClick2 = () => {
    Navigate("/homepage")
    console.log("Image clicked!");
  };



  return (
    <Box 
    sx={{ flexGrow: 1 }} 
    >
      <AppBar 
      position="static" 
      // justifyContent='center'
      // alignItems='center'
      // justifyItems="center"

       sx={{
        borderRadius:5,
        height:70, 
    backgroundColor: "#076b21ff"    
  }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box component={"img"}
            src='/plate2.png'
            alt='logo'
            sx={{height:80}}
            marginRight={5}
            onClick={handleClick2}>

          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow:1, display: { xs: 'none', sm: 'block' } }}
          >
            Gschmack
          </Typography>


           {/* <Button onClick={handleLogoClick} sx={{ p: 0 }}>   */}
          {favicon ? (
        favicon             // ← New button coming from parent
      ) : (
        <Grid
          // sx={favicon}
          component={"img"}
          src='/favouriteIcon.png'
          marginRight={5}
          height={30}
          // sx={{height:30}}
          onClick={handleClick}
          ></Grid>
      )}    


          

          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

