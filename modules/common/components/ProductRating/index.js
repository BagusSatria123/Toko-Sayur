import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Star from "@material-ui/icons/Star";
import StarHalf from "@material-ui/icons/StarHalf";

import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles({
  root: {
    justifyContent: "flex-end",
  },
});

const ProductRating = ({ rating, sold, alignRight }) => {
  const classes = useStyles();
  const starComponent = [];

  const modulus = rating % 1; //4.6 => 0.6
  const ratingCountFloored = Math.floor(rating); //4.9 => 4

  for (let i = 0; i < ratingCountFloored; i++) {
    starComponent.push(
      <Star key={i} style={{ fontSize: 12, color: yellow[800] }} />
    );
  }

  if (modulus >= 0.5) {
    starComponent.push(
      <StarHalf
        key={"half-start"}
        style={{ fontSize: 12, color: yellow[800] }}
      />
    );
  }

  return (
    <Grid
      container
      alignItems="center"
      className={clsx({ [classes.root]: alignRight })}
    >
      {starComponent}
      <Typography variant="caption">{`(${sold})`}</Typography>
    </Grid>
  );
};

ProductRating.PropTypes = {
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  alignRight: PropTypes.bool,
};
export default ProductRating;
