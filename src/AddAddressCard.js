import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  placeholder: {
    padding: theme.spacing(2)
  }
}));

export default function AddAddressCard({
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();
  const handleAddAddress = e => {
    console.log("Add Address!");
    e.stopPropagation();
  };
  return (
    <Button
      variant="outlined"
      onClick={handleAddAddress}
      fullWidth
      startIcon={<AddIcon />}
      className={clsx(classes.placeholder, overrideClasses.root)}
    >
      Add Address
    </Button>
  );
}
