import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandableListItemText from "./ExpandableListItemText";

const useStyles = makeStyles(theme => ({
  // see: https://github.com/mui-org/material-ui/issues/21645
  overrideCardAction: {
    position: "relative",
    top: 4
  },
  flex: { display: "flex" },
  grow: { flex: "1 1 auto" }
}));

export default function DescriptionCard({
  isCustomer = false,
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();

  const handleEdit = () => {};
  const description =
    "Harry will introduce himself as Harold, but if he asks you to call him Harry, be prepared to sell anything that isn't nailed down.\n\nSeriously, he will buy almost anything.\n\nOne time he bought 25 bolts of tan shag carpeting for his van.";
  return (
    <Card className={overrideClasses.root}>
      <CardHeader
        action={
          <IconButton onClick={handleEdit} aria-label="edit this description">
            <EditIcon />
          </IconButton>
        }
        title="Description"
        classes={{ action: classes.overrideCardAction }}
      />
      <CardContent>
        <div className={classes.flex}>
          <ExpandableListItemText
            clampedLines={2}
            text={description}
            noText="No description"
            classes={{ container: classes.grow }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
