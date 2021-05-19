import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as ChevronRight } from "../Assets/chevron-right.svg";

export const Treatments = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  const history = useHistory();

  const onNavigate = (link) => {
    history.push(link);
  };

  return (
    <Grid container xs={12} justify={"center"}>
      <Grid xs={12} md={8} item container className={styles.mainGrid}>
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
                "linear-gradient(90deg, rgba(67,168,215,1) 0%, rgba(67,168,215,1) 30%, rgba(255,255,255,0.7567401960784313) 100%)",
              zIndex: 0,
            }}
          ></div>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className={styles.boxItem}
          onClick={() => onNavigate("treatments/wrinkle-reduction-botox")}
        >
          <img
            src="/wrinkle-reduction-injection.jpg"
            className={styles.boxImage}
          />
          <div className={styles.banner}>
            <p className={textStyles.whiteHeading} style={{ marginTop: 7 }}>
              Wrinkle Reduction Injections
            </p>
          </div>
          <p
            className={textStyles.contentText}
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            The use of prescription only medication Botulinum toxin (known as
            Botox™) produces relaxation of the muscles that account for the
            wrinkles and lines seen in the frown, forehead and crow’s feet. It
            can safely restore a relaxed look.
          </p>
          <div style={{ width: "100%", height: 40 }} />
          <p
            className={textStyles.contentText}
            style={{
              marginLeft: 20,
              fontWeight: 600,
              position: "absolute",
              bottom: 10,
              right: 20,
            }}
          >
            READ MORE
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className={styles.boxItem}
          onClick={() => onNavigate("treatments/dermal-fillers")}
        >
          <img
            src="/dermal-filler-injections.jpg"
            className={styles.boxImage}
          />
          <div className={styles.banner}>
            <p className={textStyles.whiteHeading} style={{ marginTop: 7 }}>
              Dermal Fillers
            </p>
          </div>
          <p
            className={textStyles.contentText}
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            Dermal fillers are injectable treatments to reduce the appearance of
            lines and wrinkles by plumping out the lines.
          </p>
          <div style={{ width: "100%", height: 40 }} />
          <p
            className={textStyles.contentText}
            style={{
              marginLeft: 20,
              fontWeight: 600,
              position: "absolute",
              bottom: 10,
              right: 20,
            }}
          >
            READ MORE
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className={styles.boxItem}
          onClick={() => onNavigate("treatments/hyperhidrosis-treatment")}
        >
          <img src="/hyperhidrosis-treatment.jpg" className={styles.boxImage} />
          <div className={styles.banner}>
            <p className={textStyles.whiteHeading} style={{ marginTop: 7 }}>
              Hyperhidrosis Treatment
            </p>
          </div>
          <p
            className={textStyles.contentTextNoBottom}
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            Hyperhidrosis is a condition characterised by excessive sweating,
            usually in areas where there is a high concentration of sweat glands
            such as the hands, feet, armpits and the groin area. Excessive
            sweating can even occur when temperatures are cooler or at rest.
          </p>
          <p
            className={textStyles.contentText}
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            We offer highly effective treatment for excessive sweating at the
            Northdowns Cosmetic Clinic.
          </p>
          <div style={{ width: "100%", height: 40 }} />
          <p
            className={textStyles.contentText}
            style={{
              marginLeft: 20,
              fontWeight: 600,
              position: "absolute",
              bottom: 10,
              right: 20,
            }}
          >
            READ MORE
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className={styles.boxItem}
          onClick={() => onNavigate("treatments/before-after")}
        >
          <img src="/before-after.jpg" className={styles.boxImage} />
          <div className={styles.banner}>
            <p className={textStyles.whiteHeading} style={{ marginTop: 7 }}>
              Before & After
            </p>
          </div>
          <p
            className={textStyles.contentText}
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            View examples of how our treatments improve looks.
          </p>
          <div style={{ width: "100%", height: 40 }} />
          <p
            className={textStyles.contentText}
            style={{
              marginLeft: 20,
              fontWeight: 600,
              position: "absolute",
              bottom: 10,
              right: 20,
            }}
          >
            READ MORE
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  mainGrid: {
    marginTop: 30,
    justifyContent: "center",
  },
  boxItem: {
    border: "1px solid rgb(138, 138, 138)",
    margin: 20,
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    minHeight: 400,
    position: "relative",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "2px 2px 10px #888888",
    },
  },
  boxImage: {
    width: "100%",
  },
  banner: {
    width: "100%",
    height: 40,
    backgroundColor: "rgb(50,181,232)",
    textAlign: "center",
    marginBottom: 20,
  },
}));
