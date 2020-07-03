import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function GuestContactCard({
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();
  const handleEdit = () => {};
  return (
    <Card className={overrideClasses.root}>
      <CardHeader
        action={
          <IconButton onClick={handleEdit} aria-label="create a relationship">
            <EditIcon />
          </IconButton>
        }
        avatar={
          <Avatar aria-label="Harry Dunn" className={classes.avatar}>
            <PersonIcon />
          </Avatar>
        }
        title="Guest Relationship"
        titleTypographyProps={{ variant: "h5" }}
      />
      <CardContent>
        You are working with a guest. Providing a name will identify this
        relationship and allow you to create activities and opportunities.
      </CardContent>
    </Card>
  );
}
