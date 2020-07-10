import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1, 1, 0, 0)
  }
}));

export default function AssigneesCard({
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();
  const [deleting, setDeleting] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const assignees = [
    "Shawn McKnight",
    "Dylan Wulf",
    "Ken Thompson",
    "Stephen Saltalamacchia",
    "Ken Gregory",
    "Glenn Ryan"
  ];

  const handleDelete = index => () => {
    const newDeleting = deleting.slice();
    newDeleting[index] = !newDeleting[index];
    setDeleting(newDeleting);
  };

  return (
    <Card className={overrideClasses.root}>
      <CardHeader title="Assigned Users" />
      <CardContent>
        {assignees.map((name, index) => (
          <Chip
            className={classes.chip}
            label={name}
            onDelete={handleDelete(index)}
            disabled={deleting[index]}
            deleteIcon={deleting[index] && <CircularProgress size={22} />}
          />
        ))}
      </CardContent>
    </Card>
  );
}
