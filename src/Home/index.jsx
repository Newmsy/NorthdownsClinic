import React from "react";
import { makeStyles, Box, Grid, Hidden, Fade } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as ChevronRight } from "../Assets/chevron-right.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { HashLink as Link } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";

export const Home = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid xs={12} container style={{ justifyContent: "center" }}>
      <Grid xs={12} item>
        <Hidden smDown>
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <img
              src="homeImage.png"
              style={{
                position: "relative",
                bottom: 120,
                width: "100vw",
                marginBottom: -120,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                marginLeft: "30%",
              }}
            >
              <div style={{ position: "relative", display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
                <Fade in={true}>
                  <img src="titleDark.png" />
                </Fade>

                <Link to={`/treatments/wrinkle-reduction-botox`} smooth style={{ textDecoration: "none" }}>
                  <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "right", marginTop: 0, width: 100 }}>
                    <ScrollAnimation animateIn="animate__fadeIn" duration={1} animateOnce={true} delay={200}>
                      More
                      <ChevronRight style={{ marginLeft: 10 }} />
                    </ScrollAnimation>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Hidden>
        <Hidden mdUp>
          <img
            src="homeSmall.png"
            style={{
              width: "100vw",
            }}
          />
          <ScrollAnimation animateIn="animate__fadeInDown" duration={1} animateOnce={true}>
            <img src="titleDark.png" style={{ width: "90vw", marginLeft: "5vw" }} />
          </ScrollAnimation>
        </Hidden>
      </Grid>
      <Grid item container sm={11} md={8}>
        <Grid item xs={12} style={{ position: "relative", height: 100 }}>
          <div
            style={{
              position: "absolute",
              zIndex: 5,
            }}
          >
            <p className={textStyles.whiteTitle} style={{ zIndex: 5 }}>
              TREATMENTS
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

        <Grid item xs={12}>
          <ScrollAnimation animateIn="animate__fadeIn" duration={1} animateOnce={true}>
            <p className={textStyles.blueTitle} style={{ textAlign: "center" }}>
              BOTOX™ WRINKLE REDUCTION
            </p>
          </ScrollAnimation>
        </Grid>
        <Grid
          item
          container
          xs={12}
          style={{
            flexDirection: "row",
            display: "flex",
            marginBottom: 50,
          }}
        >
          <Grid item sm={12} md={4}>
            <img src="wrinkle-reduction-home.jpg" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item sm={0} md={1} />
          <Grid item sm={10} md={6}>
            <p
              className={textStyles.contentText}
              style={{
                fontSize: 20,
                paddingLeft: 10,
                paddingRight: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              The use of prescription only medication Botulinum toxin, known as Botox™, produces relaxation of the muscles that account for
              the wrinkles and lines seen in the frown, forehead and crow’s feet. It can safely restore a relaxed look.
            </p>
            <Link to={`/treatments/wrinkle-reduction-botox`} smooth style={{ textDecoration: "none" }}>
              <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "right" }}>
                <ScrollAnimation animateIn="animate__fadeIn" duration={1} animateOnce={true} delay={200}>
                  Learn more
                  <ChevronRight style={{ marginLeft: 10 }} />
                </ScrollAnimation>
              </p>
            </Link>
          </Grid>
        </Grid>

        <Grid xs={12} item>
          <p
            className={textStyles.blueTitle}
            style={{
              textAlign: "center",
              borderTop: "1px solid rgba(168,168,168, 0.5)",
              paddingTop: 50,
            }}
          >
            <ScrollAnimation animateIn="animate__fadeIn" duration={1} animateOnce={true}>
              DERMAL FILLERS
            </ScrollAnimation>
          </p>
        </Grid>

        <Grid
          item
          container
          xs={12}
          style={{
            position: "relative",
            flexDirection: "row",
            display: "flex",
            marginBottom: 50,
          }}
        >
          <Grid item sm={12} md={4}>
            <img src="dermal-fillers-home.jpg" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid sm={0} md={1} />
          <Grid sm={12} md={6}>
            <p className={textStyles.contentText} style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10 }}>
              Dermal fillers such as Juvéderm™, Restylane™ and Sculptra™ are used as an effective treatment for deep lines and wrinkles.
              They can help reduce deep lines and wrinkles, fill hollows, enhance sunken cheeks and smooth the contours of your face.
            </p>
            <Link to={`/treatments/dermal-fillers`} smooth style={{ textDecoration: "none" }}>
              <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "right" }}>
                <ScrollAnimation animateIn="animate__fadeIn" duration={1} animateOnce={true} delay={200}>
                  Learn more
                  <ChevronRight style={{ marginLeft: 10 }} />
                </ScrollAnimation>
              </p>
            </Link>
          </Grid>
        </Grid>

        <Grid xs={12}>
          <p
            className={textStyles.blueTitle}
            style={{
              textAlign: "center",
              borderTop: "1px solid rgba(168,168,168, 0.5)",
              paddingTop: 50,
            }}
          >
            <ScrollAnimation animateIn="animate__fadeIn" duration={1} animateOnce={true}>
              HYPERHIDROSIS TREATMENT
            </ScrollAnimation>
          </p>
        </Grid>
        <Grid
          item
          container
          xs={12}
          style={{
            position: "relative",
            flexDirection: "row",
            display: "flex",
            marginBottom: 100,
          }}
        >
          <Grid item sm={12} md={4}>
            <img src="hyperhidrosis-home.jpg" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item sm={0} md={1} />
          <Grid item sm={12} md={6}>
            <p className={textStyles.contentText} style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10 }}>
              Hyperhidrosis is a condition characterised by excessive sweating, usually in areas where there is a high concentration of
              sweat glands such as the hands, feet, armpits and the groin area. Excessive sweating can even occur when temperatures are
              cooler or at rest.
            </p>
            <Link to={`/treatments/hyperhidrosis-treatment`} smooth style={{ textDecoration: "none" }}>
              <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "right" }}>
                <ScrollAnimation animateIn="animate__fadeIn" duration={1} animateOnce={true} delay={200}>
                  Learn more
                  <ChevronRight style={{ marginLeft: 10 }} />
                </ScrollAnimation>
              </p>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({}));
