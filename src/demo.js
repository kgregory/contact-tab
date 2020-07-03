import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { blue } from "@material-ui/core/colors";
import ContactCard from "./ContactCard";
import GuestContactCard from "./GuestContactCard";
import DescriptionCard from "./DescriptionCard";
import CustomerCard from "./CustomerCard";
import Addresses from "./Addresses";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    paddingBottom: 76
  },
  card: {
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  selection: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    backgroundColor: blue[200]
  },
  selectionLabel: {
    marginRight: theme.spacing(1),
    minWidth: 100
  }
}));

export default function RelationshipCards() {
  const classes = useStyles();
  const [relationshipType, setRelationshipType] = React.useState(
    "relationship"
  );
  const [scenario, setScenario] = React.useState("none");

  const isGuest = relationshipType === "guest";
  const isCustomer = relationshipType === "customer";

  const handleChangeRelationshipType = event => {
    setRelationshipType(event.target.value);
  };

  const handleChangeScenario = event => {
    setScenario(event.target.value);
  };

  return (
    <>
      <div className={classes.selection}>
        <Typography className={classes.selectionLabel}>Relationship</Typography>
        <Select
          labelId="relationship-type-select-label"
          id="relationship-type-select"
          value={relationshipType}
          onChange={handleChangeRelationshipType}
        >
          <MenuItem value="guest">Guest</MenuItem>
          <MenuItem value="relationship">Relationship</MenuItem>
          <MenuItem value="customer">Linked to Customer</MenuItem>
        </Select>
      </div>
      {!isGuest && (
        <div className={classes.selection}>
          <Typography className={classes.selectionLabel}>Scenario</Typography>
          <Select
            labelId="scenario-select-label"
            id="scenario-select-select"
            value={scenario}
            onChange={handleChangeScenario}
          >
            <MenuItem value="none">No Addresses</MenuItem>
            <MenuItem value="billing">Only Billing Address</MenuItem>
            <MenuItem value="delivery">Only Primary Delivery Address</MenuItem>
            <MenuItem value="other">Only Other Addresses</MenuItem>
            <MenuItem value="billingOther">
              Billing and Other Addresses
            </MenuItem>
            <MenuItem value="deliveryOther">
              Primary Delivery and Other Addresses
            </MenuItem>
            <MenuItem value="same">
              Same Address for Billing and Primary Delivery
            </MenuItem>
            <MenuItem value="different">
              Different Addresses for Billing and Primary Delivery
            </MenuItem>
          </Select>
        </div>
      )}
      <div className={classes.root}>
        {isGuest ? (
          <>
            <GuestContactCard />
          </>
        ) : (
          <>
            <ContactCard classes={{ root: classes.card }} />
            <DescriptionCard classes={{ root: classes.card }} />
            {isCustomer && <CustomerCard classes={{ root: classes.card }} />}
            <Addresses scenario={scenario} />
          </>
        )}
      </div>
    </>
  );
}
