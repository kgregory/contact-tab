import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import TablePagination from "@material-ui/core/TablePagination";
import ArchiveIcon from "@material-ui/icons/Archive";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500]
  },
  cardContent: {
    minHeight: 312 // (56 per item * 5) + (16 padding * 2)
  },
  disabledContainer: {
    marginRight: -16
  },
  pagination: {
    border: "none"
  },
  paginationSpacer: {
    width: "100vw"
  }
}));

export default function AssigneesCard({
  classes: overrideClasses = { root: undefined }
}) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;
  const start = rowsPerPage * page;
  const end = start + rowsPerPage;

  const assignees = [
    "Shawn McKnight",
    "Dylan Wulf",
    "Ken Thompson",
    "Stephen Saltalamacchia",
    "Ken Gregory",
    "Glenn Ryan"
  ];

  return (
    <Card className={overrideClasses.root}>
      <CardHeader title="Assigned Users" />
      <CardContent classes={{ root: classes.cardContent }}>
        <List disablePadding>
          {assignees.slice(start, end).map(name => (
            <ListItem
              disableGutters
              classes={{ container: classes.disabledContainer }}
            >
              <ListItemIcon>
                <Avatar className={classes.avatar} aria-label={name}>
                  {name
                    .split(" ")
                    .slice(0, 2)
                    .map(word => word.substr(0, 1))
                    .join("")}
                </Avatar>
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton>
                  <ArchiveIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <TablePagination
          {...{
            page,
            rowsPerPage,
            count: assignees.length,
            rowsPerPageOptions: [],
            onChangePage: (event, page) => setPage(page),
            classes: {
              root: classes.pagination,
              spacer: classes.paginationSpacer
            }
          }}
        />
      </CardActions>
    </Card>
  );
}
