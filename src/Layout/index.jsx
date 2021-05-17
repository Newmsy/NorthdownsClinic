import React from "react";
import { Toolbar, makeStyles, Box, Grid } from "@material-ui/core";
import { ReactComponent as ChevronDown } from "../Assets/chevron-down.svg";
import { useHistory } from "react-router-dom";

export const Layout = (props) => {
  const styles = useStyles();
  const history = useHistory();
  const [path, setPath] = React.useState(history.location.pathname);

  const visit = React.useCallback((path) => {
    history.push(path);
  });

  history.listen((loc, action) => {
    setPath(loc.pathname);
  });

  return (
    <div>
      <Toolbar className={styles.appBar}>
        <Grid container xs={12}>
          <Grid item md={2} sm={0} />
          <Grid item md={3} sm={12}>
            <img src="/logo.png" alt="logo" />
          </Grid>
          <Grid item md={1} sm={0} />
          <Grid item container md={4} sm={12}>
            <Grid item className={styles.barText} onClick={() => visit("/")}>
              Home
              {path === "/" && <ChevronDown />}
            </Grid>
            <Grid
              item
              className={styles.barText}
              onClick={() => visit("/about")}
            >
              About the Clinic
              {path === "/about" && <ChevronDown />}
            </Grid>
            <Grid
              item
              className={styles.barText}
              onClick={() => visit("/treatments")}
            >
              Treatments
              {path.includes("/treatments") && <ChevronDown />}
            </Grid>
            <Grid
              item
              className={styles.barText}
              onClick={() => visit("/contact")}
            >
              Contact
              {path === "/contact" && <ChevronDown />}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      {props.children}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgb(126,162,255)",
    height: 150,
  },
  barText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    marginTop: 30,
    marginLeft: 50,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "0.5s",
    "&:hover": {
      color: "rgb(168, 212, 247)",
    },
  },
}));
