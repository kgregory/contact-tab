import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardCollectionHeading from "../CardCollectionHeading";
import AddAddressCard from "../AddAddressCard";

const useStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    marginBottom: theme.spacing(2)
  }
}));

export default function NoAddresses() {
  const classes = useStyles();
  return (
    <>
      <CardCollectionHeading title="Billing and Primary Delivery Address" />
      <AddAddressCard classes={{ root: classes.card }} />
    </>
  );
}
