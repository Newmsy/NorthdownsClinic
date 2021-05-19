import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as People } from "../Assets/people.svg";
import { ReactComponent as Consult } from "../Assets/consulting.svg";
import { ReactComponent as Info } from "../Assets/information.svg";
import { ReactComponent as Confidential } from "../Assets/confidentiality.svg";
import ScrollAnimation from "react-animate-on-scroll";

export const About = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <>
      <Grid container xs={12} justify={"center"}>
        <Grid xs={8} item container className={styles.mainGrid} spacing={4}>
          <Grid item xs={12} style={{ height: 100, position: "relative" }}>
            <div
              style={{
                position: "absolute",
                zIndex: 5,
              }}
            >
              <p className={textStyles.whiteTitle} style={{ zIndex: 5 }}>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  duration={1}
                  animateOnce={true}
                >
                  ABOUT THE CLINIC
                </ScrollAnimation>
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                right: "20vw",
                height: 50,
                width: "100vw",
                top: "45%",
                background:
                  "linear-gradient(90deg, rgba(67,168,215,1) 0%, rgba(67,168,215,1) 12%, rgba(255,255,255,0.7567401960784313) 100%)",
                zIndex: 0,
              }}
            ></div>
          </Grid>

          <Grid
            item
            container
            xs={12}
            spacing={6}
            style={{ alignItems: "flex-start" }}
          >
            <Grid item xs={12}>
              {" "}
              <p className={textStyles.contentText}>
                <b>
                  The decision to change the way you look takes careful
                  consideration.
                </b>
              </p>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ScrollAnimation
                animateIn="animate__fadeInDown"
                duration={1}
                animateOnce={true}
              >
                <People
                  style={{
                    height: 80,
                    flexShrink: 0,
                    fill: "rgb(170,170,170)",
                  }}
                />
              </ScrollAnimation>
              <p className={textStyles.contentText}>
                At Northdowns Cosmetic Clinic, we provide a friendly, caring and
                personal approach and prefer to be honest and informative.
              </p>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ScrollAnimation
                animateIn="animate__fadeInDown"
                duration={1}
                animateOnce={true}
                delay={100}
              >
                <Info
                  style={{
                    height: 80,
                    flexShrink: 0,
                    fill: "rgb(170,170,170)",
                  }}
                />
              </ScrollAnimation>
              <p className={textStyles.contentText}>
                It is important to be fully informed as well as having realistic
                expectations of the outcome. If you don’t need any treatment, or
                there is no effective treatment – we will tell you so. Some
                areas are challenging to treat and we would rather you knew from
                the beginning.
              </p>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ScrollAnimation
                animateIn="animate__fadeInDown"
                duration={1}
                animateOnce={true}
                delay={200}
              >
                <Consult
                  style={{
                    height: 80,
                    flexShrink: 0,
                    fill: "rgb(170,170,170)",
                  }}
                />
              </ScrollAnimation>
              <p className={textStyles.contentText}>
                Northdowns Cosmetic Clinic offer a free, no obligation, no
                pressure consultation with the aesthetic practitioner during
                which your face will be assessed and, with your permission,
                photographed. We like to be very clear about your choices of
                procedures, their cost and potential complications.
              </p>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <ScrollAnimation
                animateIn="animate__fadeInDown"
                duration={1}
                animateOnce={true}
                delay={300}
              >
                <Confidential
                  style={{
                    height: 80,
                    flexShrink: 0,
                    fill: "rgb(170,170,170)",
                  }}
                />
              </ScrollAnimation>
              <p className={textStyles.contentText}>
                We also offer this discrete and confidential service to clients
                providing Consultations and Treatments in the comfort of your
                own home for privacy and convenience.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} justify={"center"} style={{ marginTop: 40 }}>
          <Grid container xs={8} justify={"center"} spacing={4}>
            <Grid item xs={12} style={{ position: "relative", height: 100 }}>
              <div
                style={{
                  position: "absolute",
                  zIndex: 5,
                }}
              >
                <p className={textStyles.whiteTitle} style={{ zIndex: 5 }}>
                  <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    duration={1}
                    animateOnce={true}
                    delay={500}
                  >
                    DR. ANDREW REED
                  </ScrollAnimation>
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "20vw",
                  height: 50,
                  width: "100vw",
                  top: "45%",
                  background:
                    "linear-gradient(90deg, rgba(67,168,215,1) 0%, rgba(67,168,215,1) 12%, rgba(255,255,255,0.7567401960784313) 100%)",
                  zIndex: 0,
                }}
              ></div>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            justify={"center"}
            style={{
              background:
                "linear-gradient(0deg, rgba(200,200,200,0) 0%, rgba(200,200,200,0.2049194677871149) 100%)",
              marginTop: 10,
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <Grid container xs={8} justify={"center"} spacing={4}>
              <Grid item xs={4}>
                <img src="andrew.jpg" style={{ width: "100%" }} />
                <p
                  className={textStyles.contentTextNoBottom}
                  style={{ marginTop: 20 }}
                >
                  <b>Dr. Andrew Reed</b>
                </p>
                <p className={textStyles.contentTextNoBottom}>
                  <b>BSc (Hons), MB BS, MRCGP, DRCOG, DFFP</b>
                </p>
                <p className={textStyles.contentTextNoBottom}>
                  <b>GMC 4413099</b>
                </p>
                <p
                  className={textStyles.contentTextNoBottom}
                  style={{ marginTop: 20 }}
                >
                  Aesthetic Practitioner
                </p>
                <p className={textStyles.contentTextNoBottom}>GP Partner</p>
                <p className={textStyles.contentTextNoBottom}>
                  Educational Supervisor
                </p>
                <p className={textStyles.contentTextNoBottom}>
                  Clinical Advisor NHS England
                </p>
              </Grid>
              <Grid item xs={8}>
                <p className={textStyles.contentText} style={{ marginTop: 0 }}>
                  Dr. Reed's training started at the Royal London Hospital
                  Medical School in 1991, and has been fully registered with the
                  GMC since 1998. He obtained a 1st class Bachelor of Science
                  Honours degree in Basic Medical Sciences specialising in
                  Anatomy Training continued at various hospitals, followed by
                  specialising in General Practice after completion of his
                  vocational training scheme centred around Maidstone Hospital
                  in Kent. He obtained a Distinction in his Membership of the
                  Royal College of General Practitioner postgraduate exams
                  (MRCGP).
                </p>
                <p className={textStyles.contentText}>
                  Dr Reed is a full time Partner in a local practice, where he
                  one of the GP trainers for the Kent, Surrey & Sussex Deanery,
                  training postgraduate doctors in general practice. He has
                  various interests within the practice including minor surgery,
                  undertaking a weekly clinic.
                </p>
                <p className={textStyles.contentText}>
                  Dr Reed is also a Clinical Advisor for NHS England helping
                  investigate and decide on performance issues raised against
                  GPs with the Kent area.
                </p>
                <p className={textStyles.contentText}>
                  He has gained certification in the use of wrinkle free
                  treatments and dermal filler following training from the Ascot
                  Cosmetic Clinic, highly regarded for their training and
                  recently undergone advanced training in further techniques for
                  wrinkle free injections and dermal filler use.
                </p>
                <p className={textStyles.contentText}>
                  He has full membership with the Medical Defence Union (MDDUS).
                </p>
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles(() => ({
  mainGrid: {
    marginTop: 30,
  },
}));
