import React from "react";
import { Toolbar, makeStyles, Box, Grid, Hidden, Select, MenuItem, Button, Fade } from "@material-ui/core";
import { ReactComponent as ChevronDown } from "../Assets/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../Assets/chevron-up.svg";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import ScrollAnimation from "react-animate-on-scroll";

export const Layout = (props) => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const history = useHistory();
  const [path, setPath] = React.useState(history.location.pathname);
  const [isVisible, setIsVisible] = React.useState(false);

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

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

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
      <Hidden mdUp>
        <Grid item container xs={12} style={{ justifyContent: "center", height: 120 }}></Grid>
      </Hidden>
      <div style={{ minHeight: "calc(100vh - 270px)" }}>{props.children}</div>
      <Grid container xs={12} style={{ justifyContent: "center", height: 150, paddingTop: 20 }}>
        <Grid
          xs={12}
          item
          container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            xs={5}
            style={{
              borderTop: "1px solid rgba(180,180,180,0.8)",
            }}
          ></Grid>
          <Grid
            item
            xs={5}
            style={{
              borderTop: "1px solid rgba(180,180,180,0.8)",
            }}
          ></Grid>
        </Grid>
        <Grid item className={styles.footerText} onClick={() => visit("/")}>
          Home
        </Grid>
        <Grid item className={styles.footerText} onClick={() => visit("/about")}>
          About
        </Grid>
        <Grid item className={styles.footerText} onClick={() => visit("/treatments")}>
          Treatments
        </Grid>
        <Grid item className={styles.footerText} onClick={() => visit("/contact")}>
          Contact
        </Grid>
        <Grid item xs={12} className={styles.footerText} onClick={() => visit("/contact")} style={{ marginTop: 0 }}>
          <p className={textStyles.contentText} style={{ textAlign: "center", marginTop: 0 }}>
            All content © Kent Northdowns Clinic 2021
          </p>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Fade in={isVisible}>
          <Button
            className={styles.topButton}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <ChevronUp style={{ height: 50 }} />
          </Button>
        </Fade>
      </Hidden>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: 120,
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 100,
    paddingBottom: 0,
    position: "relative",
    //borderBottom: "2px solid rgba(78, 173, 113, 0.3)",
    maxWidth: "100vw",
    margin: 0,
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      backgroundColor: "rgba(255,255,255,1)",
    },
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
  footerText: {
    color: "rgb(67,168,215)",
    fontSize: 22,
    fontWeight: 100,
    margin: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      margin: 10,
    },
  },
  topButton: {
    position: "fixed",
    right: "3%",
    bottom: "5%",
    backgroundColor: "rgba(200,200,200,0.5)",
    height: 60,
    width: 60,
    borderRadius: 50,
    "&:hover": {
      backgroundColor: "rgba(100,100,100,0.5)",
    },
  },
}));
