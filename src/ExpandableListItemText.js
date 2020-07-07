import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  chip: { marginLeft: theme.spacing(1) },
  expander: {
    marginTop: theme.spacing(1)
  },
  textCollapsed: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": props => props.clampedLines,
    "-webkit-box-orient": "vertical"
  }
}));

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = React.useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  React.useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}

export default function ExpandableListItemText({
  Component = ListItemText,
  clampedLines = 1,
  text,
  noText = "No text",
  classes: overrideClasses = { container: undefined }
}) {
  const width = useCurrentWidth();
  const classes = useStyles({ clampedLines });
  const [isClamped, setIsClamped] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const listItemRef = React.useRef();

  const onExpanderClick = () => {
    setIsExpanded(!isExpanded);
  };

  React.useEffect(() => {
    setIsClamped(
      listItemRef.current.scrollHeight > listItemRef.current.clientHeight
    );
  }, [width]);

  return (
    <>
      <Collapse
        in={isExpanded || !isClamped}
        collapsedHeight={
          isClamped || isExpanded ? clampedLines * 24 + 1 : undefined
        }
        classes={{ container: overrideClasses.container }}
        style={{ display: "block" }}
      >
        <Component
          ref={listItemRef}
          className={clsx({
            [classes.textCollapsed]: !isExpanded
          })}
        >
          {text == null ? (
            <em>{noText}</em>
          ) : (
            text.split("\n").map((line, index, array) => (
              <span
                key={index}
                variant="body2"
                className={classes.data}
                paragraph={array.length > 1}
                data-testid="display-text-line"
              >
                {line}
                {index < array.length - 1 && <br />}
              </span>
            ))
          )}
        </Component>
      </Collapse>
      {(isClamped || isExpanded) && (
        <div className={classes.expander}>
          <Link component="button" color="secondary" onClick={onExpanderClick}>
            {isExpanded ? "Less" : "More"}
          </Link>
        </div>
      )}
    </>
  );
}
