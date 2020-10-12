import { useState } from "react";
import React from "react";
import { Box, Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FcPlus, FcMinus, FiDollarSign, RiMore2Fill } from "react-icons/all";

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
  cartButtons: {
    float: "right",
    flexDirection: "row",
    display: "flex",
  },
  font: {
    fontFamily: "Poppins",
    margin: 10,
  },
  icon: {
    margin: 5,
    fontSize: 17,
    fontFamily: "Poppins",
  },
  price: {
    fontFamily: "Poppins",
    margin: 10,
  },
  media: {
    height: 150,
    width: 250,
    margin: "auto",
  },
});

export default function Product(props) {
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const product = props.data;

  const classes = useStyles();

  const addProduct = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    props.addToCart(product);
  };

  const removeProduct = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity - 1 > 0 ? prevQuantity - 1 : 0;
    });
    props.removeFromCart(product);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.font}>{product.name}</Typography>
          <Typography
            className={classes.font}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {product.description.substring(0, 30)}
          </Typography>
          <RiMore2Fill style={{ float: "right" }} onClick={handleOpen} />
          {open && (
            <Box style={{ marginTop: 30 }}>
              <CardMedia
                image={product.product_image}
                className={classes.media}
              />
              <Typography
                className={classes.font}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Discount: {product.discount}
              </Typography>
              <Typography
                className={classes.font}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {product.is_available === true ? "Available" : "Not Available"}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.price}>
            <FiDollarSign sixe={22} />
            {product.unit_price}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          className={classes.cartButtons}
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <div>
            <FcMinus
              className={classes.icon}
              size={22}
              onClick={removeProduct}
            />
          </div>
          <div>
            <h3 className={classes.icon}>{quantity}</h3>
          </div>
          <div>
            <FcPlus className={classes.icon} size={22} onClick={addProduct} />
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
