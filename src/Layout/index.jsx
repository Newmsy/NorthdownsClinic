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
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Toolbar className={styles.appBar}>
        <Grid container xs={12}>
          <Grid xs={1}></Grid>
          <Grid item md={2} sm={12}>
            <img src="/logo.png" alt="logo" />
          </Grid>

          <Grid
            item
            container
            md={6}
            sm={12}
            style={{ justifyContent: "center" }}
          >
            <Grid item className={styles.barText} onClick={() => visit("/")}>
              Home
              {path === "/" && (
                <ChevronDown style={{ transform: "scale(1.5, 1.5)" }} />
              )}
            </Grid>
            <Grid
              item
              className={styles.barText}
              onClick={() => visit("/about")}
            >
              About the Clinic
              {path === "/about" && (
                <ChevronDown style={{ transform: "scale(1.5, 1.5)" }} />
              )}
            </Grid>
            <Grid
              item
              className={styles.barText}
              onClick={() => visit("/treatments")}
            >
              Treatments
              {path.includes("/treatments") && (
                <ChevronDown style={{ transform: "scale(1.5, 1.5)" }} />
              )}
            </Grid>
            <Grid
              item
              className={styles.barText}
              onClick={() => visit("/contact")}
            >
              Contact
              {path === "/contact" && (
                <ChevronDown style={{ transform: "scale(1.5, 1.5)" }} />
              )}
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
    height: 120,
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 100,
    //borderBottom: "2px solid rgba(78, 173, 113, 0.3)",
  },
  barText: {
    textAlign: "center",
    fontSize: 28,
    color: "rgba(100,100,100,1)",
    marginTop: 30,
    marginLeft: 50,
    fontWeight: 100,
    height: 55,
    position: "relative",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "0.5s",

    "&:hover": {
      color: "rgb(0, 0, 0)",
    },
  },
}));
