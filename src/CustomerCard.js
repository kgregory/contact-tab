import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandableListItemText from "./ExpandableListItemText";

const useStyles = makeStyles(theme => ({
  flex: { display: "flex" },
  grow: { flex: "1 1 auto" }
}));

export default function CustomerCard({
  isCustomer = false,
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();

  return (
    <Card className={overrideClasses.root}>
      <CardHeader title="Customer Details" />
      <CardContent>
        Customer: TK421-HD, Last Purchase Date, Customer Since
      </CardContent>
    </Card>
  );
}
