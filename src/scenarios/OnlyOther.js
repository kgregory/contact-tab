import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardCollectionHeading from "../CardCollectionHeading";
import AddressCard from "../AddressCard";
import AddAddressCard from "../AddAddressCard";

const useStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    marginBottom: theme.spacing(2)
  }
}));

export default function OnlyOther() {
  const classes = useStyles();
  return (
    <>
      <CardCollectionHeading title="Billing and Primary Delivery Address" />
      <AddAddressCard classes={{ root: classes.card }} />
      <CardCollectionHeading title="Other Addresses" />
      <AddressCard
        {...{
          description: "Parents",
          name: "Harry Dunn Sr.",
          emails: [{ address: "hdunn@muttcutts.com" }],
          phones: [{ number: "(401) 601-8500", type: "Mobile" }],
          street1: "3400 River Blvd",
          locality: "Providence",
          region: "RI",
          postalCode: "02902",
          classes: { root: classes.card }
        }}
      />
    </>
  );
}
