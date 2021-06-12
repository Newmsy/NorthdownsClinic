import React from "react";
import { makeStyles, Box, Grid, Hidden } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as Location } from "../Assets/location.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { HashLink as Link } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";

export const Contact = () => {
  const textStyles = useTextStyles();
  const style = useStyles();
  return (
    <Grid container xs={12} style={{ justifyContent: "center" }}>
      <Grid item container xs={12} md={8}>
        <Grid item xs={12} style={{ height: 100, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              zIndex: 5,
            }}
          >
            <p className={textStyles.whiteTitle} style={{ zIndex: 5 }}>
              <ScrollAnimation animateIn="animate__fadeInLeft" duration={1} animateOnce={true}>
                CONTACT US
              </ScrollAnimation>
            </p>
          </div>
          <Hidden smDown>
            <div
              style={{
                position: "absolute",
                right: "20vw",
                height: 50,
                width: "100vw",
                top: "30%",
                background:
                  "linear-gradient(90deg, rgba(67,168,215,1) 0%, rgba(67,168,215,1) 40%, rgba(255,255,255,0.7567401960784313) 100%)",
                zIndex: 0,
              }}
            ></div>
          </Hidden>
          <Hidden mdUp>
            <div
              style={{
                position: "absolute",
                height: 50,
                width: "100vw",
                top: "30%",
                background: " rgba(67,168,215,1)",
                zIndex: 0,
              }}
            ></div>
          </Hidden>
        </Grid>
        <Grid item container xs={12} md={12} style={{ justifyContent: "center" }}>
          <Grid item container xs={10} md={12}>
            <Grid item container xs={12} style={{ marginTop: 50 }}>
              <Grid
                item
                xs={12}
                md={3}
                style={{
                  marginRight: "5%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ position: "relative" }}>
                  <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "left" }}>
                    ADDRESS
                    <Location style={{ marginLeft: 10, height: 30, width: 30, opacity: 0.6 }} />
                  </p>
                </div>

                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  Northdowns Cosmetic Clinic
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  Elite Beauty Canterbury
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  20 Orange Street
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  Canterbury CT1 2JA
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%", marginTop: 20 }}>
                  Telephone: <a href="tel:01227451145">01227 451145</a>
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  <a href="elite-beauty-canterbury.co.uk/contact/">elite-beauty-canterbury.co.uk/contact/</a>
                </p>
                <p
                  className={textStyles.contentText}
                  style={{ textAlign: "left", margin: 2, width: "100%", marginTop: 40, marginBottom: 30 }}
                >
                  We also offer a discrete and confidential service to clients providing Consultations and Treatments in the comfort of your
                  own home for privacy and convenience.
                </p>
              </Grid>
              <Grid item xs={12} md={8}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.6846351737177!2d1.0783589157616247!3d51.28012387959843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbb56997ae8f%3A0x6d4152d240f66ff1!2sElite%20Beauty%20-%20Canterbury!5e0!3m2!1sen!2suk!4v1623503676413!5m2!1sen!2suk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  mainGrid: {
    marginTop: 30,
  },
}));
