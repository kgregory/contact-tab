import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function CardCollectionHeading({ title }) {
  return (
    <Toolbar variant="dense" disableGutters>
      <Typography variant="h6" color="inherit">
        {title}
      </Typography>
    </Toolbar>
  );
}
