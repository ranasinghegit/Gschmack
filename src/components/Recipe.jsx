import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import food2 from "../assets/food1.jpg";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard({
  recipe,
  showActions = false,
  onEdit,
  onDelete,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          showActions && (
            <>
              <IconButton
                aria-label="settings"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <MoreVertIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    onEdit && onEdit(recipe);
                  }}
                >
                  Edit
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    onDelete(recipe._id);
                  }}
                >
                  Delete
                </MenuItem>
              </Menu>
            </>
          )
        }
        title={
          <Typography
            sx={{
              color: "#ff7c2ade",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "17px",
              textAlign: "center",
            }}
          >
            {recipe.name}
          </Typography>
        }
        subheader={recipe.country}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.img}
        alt={recipe.name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
