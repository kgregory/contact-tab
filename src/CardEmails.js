import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Collapse from "@material-ui/core/Collapse";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EmailIcon from "@material-ui/icons/Email";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  chip: { marginLeft: theme.spacing(1) },
  expand: {
    display: "flex",
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  icon: { marginLeft: theme.spacing(1) },
  subsequent: {
    marginTop: theme.spacing(0.25)
  }
}));

export default function CardEmails({
  emails,
  lineLimit = 1,
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const showMore = emails.length > lineLimit;
  const upperbound = showMore ? lineLimit : undefined;
  if (emails.length === 0) {
    return null;
  }
  return (
    <>
      <List disablePadding classes={{ root: overrideClasses.root }}>
        {emails.slice(0, upperbound).map(({ address }, index) => (
          <ListItem key={`${address}-${index}`} disableGutters>
            {index === 0 && (
              <ListItemIcon>
                <EmailIcon className={classes.icon} />
              </ListItemIcon>
            )}
            <ListItemText inset={index > 0}>
              <Link href="" color="secondary">
                {address}
              </Link>
            </ListItemText>
            {index === 0 && showMore && (
              <Chip
                label={expanded ? "less" : `+${emails.length - lineLimit} more`}
                className={classes.chip}
                onClick={handleExpandClick}
                icon={
                  <div
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                  >
                    <ExpandMoreIcon />
                  </div>
                }
              />
            )}
          </ListItem>
        ))}
      </List>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List disablePadding classes={{ root: overrideClasses.root }}>
          {emails.slice(upperbound).map(({ address }, index) => (
            <ListItem key={`hidden-${address}-${index}`} disableGutters>
              <ListItemText inset>
                <Link href="" color="secondary">
                  {address}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
