import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import PaymentIcon from "@material-ui/icons/Payment";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlaceIcon from "@material-ui/icons/Place";
import ExpandableListItemText from "./ExpandableListItemText";
import CardEmails from "./CardEmails";
import CardPhones from "./CardPhones";

const useStyles = makeStyles(theme => ({
  chip: { marginLeft: theme.spacing(1) },
  icon: {
    margin: theme.spacing(1)
  },
  block: {
    display: "block"
  },
  flexTop: { alignItems: "flex-start" }
}));

export default function AddressCard({
  description,
  name,
  phones,
  emails,
  street1,
  street2,
  locality,
  region,
  postalCode,
  deliveryInstructions,
  isBilling = false,
  isPrimaryDelivery = false,
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showAddress =
    (street1 ?? street2 ?? locality ?? region ?? postalCode) != null;

  return (
    <>
      <Card className={overrideClasses.root}>
        <CardHeader
          action={
            <IconButton onClick={handleClick} aria-label="edit this address">
              <MoreVertIcon />
            </IconButton>
          }
          title={description}
        />
        <CardContent>
          {name && (
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemIcon>
                  <PersonIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </ListItem>
            </List>
          )}
          <CardEmails emails={emails} />
          <CardPhones phones={phones} />
          {showAddress && (
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemIcon>
                  <PlaceIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText>
                  <Typography>
                    {street1 && <Typography>{street1}</Typography>}
                    {street2 && <Typography>{street2}</Typography>}
                    {locality && region && (
                      <Typography>
                        {locality}, {region}
                        {postalCode && `  ${postalCode}`}
                      </Typography>
                    )}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          )}
          <List disablePadding>
            <ListItem disableGutters className={classes.flexTop}>
              <ListItemIcon>
                <LocalShippingIcon className={classes.icon} />
              </ListItemIcon>
              <div className={classes.block}>
                <ExpandableListItemText
                  text={deliveryInstructions}
                  noText="No delivery instructions"
                  clampedLines={2}
                />
              </div>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} disabled={isBilling}>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText>Set as Billing Address</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} disabled={isPrimaryDelivery}>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText>Set as Primary Delivery Address</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          disabled={isBilling || isPrimaryDelivery}
        >
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
