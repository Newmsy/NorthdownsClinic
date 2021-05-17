import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as ChevronRight } from "../Assets/chevron-right.svg";

export const About = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid container xs={12} justify={"center"}>
      <Grid xs={8} item container className={styles.mainGrid} spacing={4}>
        <Grid item xs={4} style={{ height: 100 }}>
          <p className={textStyles.blueTitle}>ABOUT THE CLINIC</p>
        </Grid>
        <Grid item xs={4} style={{ height: 100 }}>
          <p className={textStyles.blueTitle}>DR. ANDREW REED</p>
        </Grid>
        <Grid item xs={4} style={{ height: 100 }}></Grid>
        <Grid item xs={4} style={{ height: 100 }}>
          <p className={textStyles.contentText}>
            <b>
              The decision to change the way you look takes careful
              consideration.
            </b>
          </p>
          <p className={textStyles.contentText}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ChevronRight
                style={{
                  color: "green",
                  height: 20,
                  width: 20,
                  flexShrink: 0,
                }}
              />
              <div style={{ marginLeft: 10 }}>
                At Northdowns Cosmetic Clinic, we provide a friendly, caring and
                personal approach and prefer to be honest and informative.
              </div>
            </div>
          </p>
          <p className={textStyles.contentText}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ChevronRight
                style={{
                  color: "green",
                  height: 20,
                  width: 20,
                  flexShrink: 0,
                }}
              />
              <div style={{ marginLeft: 10 }}>
                It is important to be fully informed as well as having realistic
                expectations of the outcome. If you don’t need any treatment, or
                there is no effective treatment – we will tell you so. Some
                areas are challenging to treat and we would rather you knew from
                the beginning.
              </div>
            </div>
          </p>
          <p className={textStyles.contentText}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ChevronRight
                style={{
                  color: "green",
                  height: 20,
                  width: 20,
                  flexShrink: 0,
                }}
              />
              <div style={{ marginLeft: 10 }}>
                Northdowns Cosmetic Clinic offer a free, no obligation, no
                pressure consultation with the aesthetic practitioner during
                which your face will be assessed and, with your permission,
                photographed. We like to be very clear about your choices of
                procedures, their cost and potential complications.
              </div>
            </div>
          </p>
          <p className={textStyles.contentText}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ChevronRight
                style={{
                  color: "green",
                  height: 20,
                  width: 20,
                  flexShrink: 0,
                }}
              />
              <div style={{ marginLeft: 10 }}>
                We also offer this discrete and confidential service to clients
                providing Consultations and Treatments in the comfort of your
                own home for privacy and convenience.
              </div>
            </div>
          </p>
        </Grid>
        <Grid item xs={4} style={{ height: 100 }}>
          <p className={textStyles.contentText}>
            Dr. Reed's training started at the Royal London Hospital Medical
            School in 1991, and has been fully registered with the GMC since
            1998. He obtained a 1st class Bachelor of Science Honours degree in
            Basic Medical Sciences specialising in Anatomy Training continued at
            various hospitals, followed by specialising in General Practice
            after completion of his vocational training scheme centred around
            Maidstone Hospital in Kent. He obtained a Distinction in his
            Membership of the Royal College of General Practitioner postgraduate
            exams (MRCGP).
          </p>
          <p className={textStyles.contentText}>
            Dr Reed is a full time Partner in a local practice, where he one of
            the GP trainers for the Kent, Surrey & Sussex Deanery, training
            postgraduate doctors in general practice. He has various interests
            within the practice including minor surgery, undertaking a weekly
            clinic.
          </p>
          <p className={textStyles.contentText}>
            Dr Reed is also a Clinical Advisor for NHS England helping
            investigate and decide on performance issues raised against GPs with
            the Kent area.
          </p>
          <p className={textStyles.contentText}>
            He has gained certification in the use of wrinkle free treatments
            and dermal filler following training from the Ascot Cosmetic Clinic,
            highly regarded for their training and recently undergone advanced
            training in further techniques for wrinkle free injections and
            dermal filler use.
          </p>
          <p className={textStyles.contentText}>
            He has full membership with the Medical Defence Union (MDDUS).
          </p>
        </Grid>
        <Grid item xs={4} style={{ height: 100 }}>
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
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  mainGrid: {
    marginTop: 30,
  },
}));
