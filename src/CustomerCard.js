import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  container: {
    flexWrap: "wrap"
  },
  item: {
    flexShrink: 0,
    minWidth: "33%"
  },
  label: {
    flexBasis: "25%",
    minWidth: "25%"
  },
  value: {
    flexBasis: "75%",
    minWidth: "75%"
  }
}));

export default function CustomerCard({
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();
  const itemProps = {
    primaryTypographyProps: { color: "textSecondary", variant: "body2" },
    secondaryTypographyProps: { color: "textPrimary" }
  };
  return (
    <Card className={overrideClasses.root}>
      <CardHeader title="Customer Details" subheader="Customer TK421-HD" />
      <CardContent>
        <List disablePadding>
          <ListItem disableGutters classes={{ root: classes.container }}>
            <ListItemText
              primary="Last Purchase"
              secondary="7/25/2019"
              className={classes.item}
              {...itemProps}
            />
            <ListItemText
              primary="Customer Since"
              secondary="8/23/1942"
              className={classes.item}
              {...itemProps}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
