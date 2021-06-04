import { Toolbar, makeStyles, Box, Grid } from "@material-ui/core";

export const useTextStyles = makeStyles(() => ({
  blueTitle: {
    fontSize: 32,
    color: "rgb(67,168,215)",
    fontStretch: "condensed",
    //transform: "scale(1, 1.2)",
    fontWeight: 100,
  },
  whiteTitle: {
    fontSize: 32,
    color: "#fff",
    fontStretch: "condensed",
    //transform: "scale(1, 1.2)",
    fontWeight: 100,
  },
  contentText: {
    fontSize: 18,
    color: "rgb(138, 138, 138)",
    marginBottom: 20,
    textAlign: "justify",
    fontWeight: 300,
  },
  contentTextNJ: {
    fontSize: 18,
    color: "rgb(138, 138, 138)",
    marginBottom: 20,
    fontWeight: 300,
  },
  contentTextFAQ: {
    fontSize: 18,
    color: "rgb(138, 138, 138)",
    marginBottom: 20,
    textAlign: "justify",
    fontWeight: 300,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  contentTextNoBottom: {
    fontSize: 15,
    color: "rgb(138, 138, 138)",
    margin: 0,
    padding: 0,
  },
  whiteHeading: {
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
  },
}));
