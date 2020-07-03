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

export default function DeliveryOther() {
  const classes = useStyles();
  return (
    <>
      <CardCollectionHeading title="Billing Address" />
      <AddAddressCard classes={{ root: classes.card }} />
      <CardCollectionHeading title="Primary Delivery Address" />
      <AddressCard
        {...{
          description: "The office",
          name: "Harry Dunn",
          emails: [
            { address: "hdunn@storis.com" },
            { address: "hdunn@muttcutts.com" },
            { address: "myoldemail@aol.com" }
          ],
          phones: [
            { number: "(973) 601-8700", type: "Work", extension: "284" },
            { number: "(401) 601-8500", type: "Mobile" }
          ],
          street1: "400 Valley Road",
          street2: "Suite 400",
          locality: "Mount Arlington",
          region: "NJ",
          postalCode: "07856",
          classes: { root: classes.card }
        }}
      />
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
