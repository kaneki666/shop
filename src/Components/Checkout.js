import { Box, Grid, makeStyles, Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "#FF4500",
    borderRadius: 10,
    color: "white",
    fontFamily: "Poppins",
  },
  right: {
    textAlign: "right",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "white",
    fontFamily: "Poppins",
  },
});
const Checkout = ({ qty, onClick, total }) => {
  const classes = useStyles();
  return (
    <>
      {qty > 0 && (
        <Box className={classes.root}>
          <Grid justify="space-between" container>
            <Grid item xs={4} className={classes.right}>
              {qty} Item
            </Grid>
            <Grid item xs={4} className={classes.right}>
              <Button onClick={onClick} className={classes.button}>
                CHECKOUT
              </Button>
            </Grid>
            <Grid item xs={4} className={classes.right}>
              ${total}
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
export default Checkout;
