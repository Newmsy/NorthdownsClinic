import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
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
      <Grid xs={12}>
        <img
          src="homeImage.png"
          style={{
            position: "relative",
            bottom: 120,
            width: "100vw",
            marginBottom: -120,
          }}
        />
      </Grid>
      <Grid item xs={8}>
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
        </Grid>

        <Grid xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={1}
            animateOnce={true}
          >
            <p className={textStyles.blueTitle} style={{ textAlign: "center" }}>
              BOTOX™ WRINKLE REDUCTION
            </p>
          </ScrollAnimation>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            position: "relative",
            flexDirection: "row",
            display: "flex",
            marginBottom: 50,
          }}
        >
          <Grid xs={4}>
            <img src="wrinkle-reduction-home.jpg" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={1} />
          <Grid xs={6}>
            <p className={textStyles.contentText} style={{ fontSize: 24 }}>
              The use of prescription only medication Botulinum toxin, known as
              Botox™, produces relaxation of the muscles that account for the
              wrinkles and lines seen in the frown, forehead and crow’s feet. It
              can safely restore a relaxed look.
            </p>
            <Link
              to={`/treatments/wrinkle-reduction-botox`}
              smooth
              style={{ textDecoration: "none" }}
            >
              <p
                className={textStyles.contentTextFAQ}
                style={{ fontSize: 26, textAlign: "right" }}
              >
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  duration={1}
                  animateOnce={true}
                  delay={200}
                >
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
            <ScrollAnimation
              animateIn="animate__fadeIn"
              duration={1}
              animateOnce={true}
            >
              DERMAL FILLERS
            </ScrollAnimation>
          </p>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            position: "relative",
            flexDirection: "row",
            display: "flex",
            marginBottom: 50,
          }}
        >
          <Grid xs={4}>
            <img src="dermal-fillers-home.jpg" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={1} />
          <Grid xs={6}>
            <p className={textStyles.contentText} style={{ fontSize: 24 }}>
              Dermal fillers such as Juvéderm™, Restylane™ and Sculptra™ are
              used as an effective treatment for deep lines and wrinkles. They
              can help reduce deep lines and wrinkles, fill hollows, enhance
              sunken cheeks and smooth the contours of your face.
            </p>
            <Link
              to={`/treatments/dermal-fillers`}
              smooth
              style={{ textDecoration: "none" }}
            >
              <p
                className={textStyles.contentTextFAQ}
                style={{ fontSize: 26, textAlign: "right" }}
              >
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  duration={1}
                  animateOnce={true}
                  delay={200}
                >
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
            <ScrollAnimation
              animateIn="animate__fadeIn"
              duration={1}
              animateOnce={true}
            >
              HYPERHIDROSIS TREATMENT
            </ScrollAnimation>
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            position: "relative",
            flexDirection: "row",
            display: "flex",
            marginBottom: 100,
          }}
        >
          <Grid xs={4}>
            <img src="hyperhidrosis-home.jpg" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={1} />
          <Grid xs={6}>
            <p className={textStyles.contentText} style={{ fontSize: 24 }}>
              Hyperhidrosis is a condition characterised by excessive sweating,
              usually in areas where there is a high concentration of sweat
              glands such as the hands, feet, armpits and the groin area.
              Excessive sweating can even occur when temperatures are cooler or
              at rest.
            </p>
            <Link
              to={`/treatments/hyperhidrosis-treatment`}
              smooth
              style={{ textDecoration: "none" }}
            >
              <p
                className={textStyles.contentTextFAQ}
                style={{ fontSize: 26, textAlign: "right" }}
              >
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  duration={1}
                  animateOnce={true}
                  delay={200}
                >
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
