import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Link from "@material-ui/core/Link";
import PhoneIcon from "@material-ui/icons/Phone";
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
  icon: { margin: theme.spacing(1) },
  noIcon: { marginLeft: 56 },
  subsequent: {
    marginTop: theme.spacing(0.25)
  }
}));

export default function CardPhones({
  phones,
  lineLimit = 1,
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const showMore = phones.length > lineLimit;
  const upperbound = showMore ? lineLimit : undefined;
  if (phones.length === 0) {
    return null;
  }
  return (
    <>
      <List disablePadding classes={{ root: overrideClasses.root }}>
        {phones
          .slice(0, upperbound)
          .map(({ number, type, extension }, index) => (
            <ListItem
              key={`${number}-${index}`}
              disableGutters
              {...(index > 0 ? { classes: { root: classes.noIcon } } : {})}
            >
              {index === 0 && (
                <ListItemIcon>
                  <PhoneIcon className={classes.icon} />
                </ListItemIcon>
              )}
              <ListItemText
                primary={
                  <Link href="" color="secondary">
                    {number}
                    {extension != null ? ` Ext. ${extension}` : null}
                  </Link>
                }
                secondary={type}
              />
              {index === 0 && showMore && (
                <Chip
                  label={
                    expanded ? "less" : `+${phones.length - lineLimit} more`
                  }
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
          {phones
            .slice(upperbound)
            .map(({ number, type, extension }, index) => (
              <ListItem
                key={`hidden-${number}-${index}`}
                disableGutters
                classes={{ root: classes.noIcon }}
              >
                <ListItemText
                  primary={
                    <Link href="" color="secondary">
                      {number}
                      {extension != null ? ` Ext. ${extension}` : null}
                    </Link>
                  }
                  secondary={type}
                />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </>
  );
}
