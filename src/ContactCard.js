import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import EditIcon from "@material-ui/icons/Edit";
import CardEmails from "./CardEmails";
import CardPhones from "./CardPhones";

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ContactCard({
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();

  const handleEdit = () => {};

  return (
    <Card className={overrideClasses.root}>
      <CardHeader
        action={
          <IconButton onClick={handleEdit} aria-label="edit this relationship">
            <EditIcon />
          </IconButton>
        }
        avatar={
          <Avatar aria-label="Harry Dunn" className={classes.avatar}>
            HD
          </Avatar>
        }
        title="Harry Dunn"
        titleTypographyProps={{ variant: "h5" }}
      />
      <CardContent>
        <CardEmails emails={[{ address: "hdunn@muttcutts.com" }]} />
        <CardPhones
          phones={[
            { number: "(973) 600-8200", type: "Work", extension: "284" }
          ]}
        />
      </CardContent>
    </Card>
  );
}
