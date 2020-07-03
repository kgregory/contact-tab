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

export default function SameBillingDelivery() {
  const classes = useStyles();
  const deliveryInstructions =
    "If you could be so kind as to blindly toss all of my packages from the truck toward my home without slowing down, I'd appreciate it.\n\nSpecial consideration for destroying some aspect of my landscaping would be a bonus.";
  return (
    <>
      <CardCollectionHeading title="Billing and Primary Delivery Address" />
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
          classes: { root: classes.card },
          isBilling: true,
          isPrimaryDelivery: true,
          deliveryInstructions
        }}
      />
      <CardCollectionHeading title="Other Addresses" />
      <AddressCard
        {...{
          description: "The apartment",
          name: "Harry Dunn",
          emails: [{ address: "hdunn@muttcutts.com" }],
          phones: [{ number: "(401) 601-8500", type: "Mobile" }],
          street1: "3400 Mountain Avenue",
          street2: "Apartment 4B",
          locality: "Providence",
          region: "RI",
          postalCode: "02902",
          classes: { root: classes.card }
        }}
      />
      <AddAddressCard />
    </>
  );
}
