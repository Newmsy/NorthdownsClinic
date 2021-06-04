import React from "react";
import { Toolbar, makeStyles, Box, Grid, Hidden, Select, MenuItem } from "@material-ui/core";
import { ReactComponent as ChevronDown } from "../Assets/chevron-down.svg";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";

export const Layout = (props) => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const history = useHistory();
  const [path, setPath] = React.useState(history.location.pathname);

  const visit = React.useCallback((path) => {
    history.push(path);
  });

  const handleVisit = React.useCallback((event) => {
    history.push(event.target.value);
  }, []);

  history.listen((loc, action) => {
    setPath(loc.pathname);
  });

  console.log(path.split("/"));

  return (
    <div style={{ overflowY: "hidden" }}>
      <Toolbar className={styles.appBar}>
        <Grid container xs={12}>
          <Grid item xs={0} lg={1}></Grid>
          <Grid item md={2} sm={4} xs={6}>
            <img src="/logo.png" alt="logo" style={{ width: "100%" }} />
          </Grid>
          <Hidden smDown>
            <Grid item container lg={7} md={10} sm={12} style={{ justifyContent: "center" }}>
              <Grid item className={styles.barText} onClick={() => visit("/")}>
                Home
                {path === "/" && <ChevronDown style={{ transform: "scale(1.5, 1.5)" }} />}
              </Grid>
              <Grid item className={styles.barText} onClick={() => visit("/about")}>
                About the Clinic
                {path === "/about" && <ChevronDown style={{ transform: "scale(1.5, 1.5)" }} />}
              </Grid>
              <Grid item className={styles.barText} onClick={() => visit("/treatments")}>
                Treatments
                {path.includes("/treatments") && <ChevronDown style={{ transform: "scale(1.5, 1.5)" }} />}
              </Grid>
              <Grid item className={styles.barText} onClick={() => visit("/contact")}>
                Contact
                {path === "/contact" && <ChevronDown style={{ transform: "scale(1.5, 1.5)" }} />}
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item container xs={12} style={{ justifyContent: "center" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={`/${path.split("/")[1]}`}
                onChange={handleVisit}
                style={{ width: "50%", maxWidth: 250, textAlign: "center" }}
                className={textStyles.contentText}
              >
                <MenuItem value={"/"}>Home</MenuItem>
                <MenuItem value={"/about"}>About</MenuItem>
                <MenuItem value={"/treatments"}>Treatments</MenuItem>
                <MenuItem value={"/contact"}>Contact</MenuItem>
              </Select>
            </Grid>
          </Hidden>
          <Grid
            xs={12}
            item
            container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              position: "absolute",
              bottom: 0,
            }}
          >
            <Grid
              item
              xs={5}
              style={{
                borderBottom: "1px solid rgba(180,180,180,0.8)",
              }}
            ></Grid>
            <Grid
              item
              xs={5}
              style={{
                borderBottom: "1px solid rgba(180,180,180,0.8)",
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Toolbar>
      {props.children}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    minHeight: 120,
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 100,
    paddingBottom: 0,
    position: "relative",
    //borderBottom: "2px solid rgba(78, 173, 113, 0.3)",
    maxWidth: "100vw",
    margin: 0,
    padding: 0,
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
