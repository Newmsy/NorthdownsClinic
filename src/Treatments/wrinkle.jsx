import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as ChevronRight } from "../Assets/chevron-right.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Wrinkle = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(panel);
  };

  return (
    <Grid container xs={12} justify={"center"}>
      <Grid xs={8} item container className={styles.mainGrid} spacing={4}>
        <Grid item xs={12}>
          <p className={textStyles.blueTitle}>WRINKLE REDUCTION INJECTIONS</p>
          <img src="/wrinkle-reduction-injection.jpg" />
          <p className={textStyles.contentText}>
            The use of prescription only medication Botulinum toxin (known as
            Botox™) produces relaxation of the muscles that account for the
            wrinkles and lines seen in the frown, forehead and crow’s feet. It
            can safely restore a relaxed look. Doctors have been doing these
            injections successfully and safely for more than 20 years in many
            different specialities of medicine, eg Neurology, Urology, Surgery
            and Ophthalmology with no long term side effects reported.
          </p>
        </Grid>
        <Grid item xs={10}>
          {accordionDetails.map((detail, index) => (
            <Accordions
              title={detail.title}
              body={detail.body}
              panel={expanded}
              setPanel={handleChange}
              index={index}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const Accordions = ({ setPanel, panel, title, body, index }) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Accordion
      expanded={panel === index}
      onChange={setPanel(index)}
      className={styles.accordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <p
          className={textStyles.whiteHeading}
          style={{ marginTop: 0, marginBottom: 0 }}
        >
          {title}
        </p>
      </AccordionSummary>
      <AccordionDetails className={styles.accordionDetails}>
        <p className={textStyles.contentTextNoBottom}>{body}</p>
      </AccordionDetails>
    </Accordion>
  );
};

const accordionDetails = [
  {
    title: "How does it work?",
    body: (
      <p>
        Acetylcholine is a chemical messenger produced in our nerves to
        stimulate the muscles to contract. The botulinum toxin reduces the
        release of the acetylcholine and hence reducing muscle contraction,
        leaving the overlying skin smooth and unwrinkled. The action on the
        muscle is not permanent, and it works on specific muscles, leaving the
        surrounding muscles unaffected, producing normal facial expressions
        without the wrinkles. However, if you try very hard, you will still be
        able to move the muscles a little, but this does not mean the treatment
        has not worked.
      </p>
    ),
  },
  {
    title: "Where can wrinkle relaxing injections be given?",
    body: (
      <>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Eyes – to reduce the crows feet appearance
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Forehead – to reduce the frown lines
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Brow – to reduce the frown lines and vertical line seen
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Mouth – to reduce the fine vertical lines on the upper lip or to
          treat down turned mouths
        </p>
      </>
    ),
  },
  {
    title: "How is the treatment performed?",
    body: (
      <p>
        Disposable syringes are used to inject the solution with a fine needle
        such as those used in diabetics, hence it is hardly felt. A small amount
        of botulinium powder is diluted with bacteriostatic saline and injected
        very precisely into several locations. It will take 2-3 days for the
        effects to start to be seen, and is usually at its maximum effect by 2
        weeks. The treatment may last from 2-6 months, on average 4 months. With
        ongoing repetitive treatment, the effects begin to last for longer after
        18 months or so. Occasionally you may require a top up injection at 2
        weeks if the muscle is not fully relaxed.
      </p>
    ),
  },
  {
    title: "Is Botox™ Safe?",
    body: (
      <p>
        Botox™ is a purified protein and is used in very small quantities. It
        cannot produce any permanent damage or travel within the body to make
        you ill. It attaches to the muscles it is placed in and can not migrate
        from there. Botox™ is a prescription only drug that has to be
        handwritten up by a doctor. Prescription only drugs cannot be advertised
        and this is why you will not find any information sheets in a waiting
        room.
      </p>
    ),
  },
  {
    title: "Are there any downsides?",
    body: (
      <>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Bruising – at the injection site, this is not very common, but more
          likely around the eyes{" "}
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Slight redness – again at the injection site, but this is transient
          and fades within an hour or so{" "}
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          • Headache – particularly with the forehead procedure{" "}
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Rarely – a flu like illness{" "}
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Botox™ contains a small amount of human albumin that is collected
          from pooled blood donations in the United States. Care is taken with
          control of the donors, the manufacturing process and the removal of
          inactivation of any viral contamination. There is a theoretical risk
          of virus transmission, but none has ever been reported.
        </p>
      </>
    ),
  },
  {
    title: "What could go wrong?",
    body: (
      <>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Drooping eyelid – Usually due to travel of the injected solution.
          This happens in less than 1% of patients and will disappear over a
          2-10 week period. It can be helped by eye drops, but reduced by
          keeping strictly to the after care advice.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          • Drop in the eyebrow position – this is usually due to having heavier
          eyebrows than usual (eg in men) and so this wouldn’t be suggested at
          first consultation. If it occurs it is only temporary but again can
          take 2-10 weeks to go.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Double vision – again can be due to travel of the solution when
          treating the crows feet lines. Using correct technique this is very
          uncommon, but may last a couple of weeks. Is not treatable and will
          mean that you cannot drive.
        </p>
      </>
    ),
  },
  {
    title: "After treatment instructions",
    body: (
      <p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • It is best to remain upright for 4 hours afterwards
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          • During the first few hours, work your muscle groups treated by
          frowning and smiling a lot. This will help the treatment to work by
          speeding up the absorption of the Botox™
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Do not touch the areas treated for 12 hours
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Wait for up to 2 weeks for the treatment to work
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • No air travel for at least 24 hours
        </p>
      </p>
    ),
  },
  {
    title: "Who should not have treatment?",
    body: (
      <p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Pregnant, breastfeeding women or those trying for a baby
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Patients who have diseases that affect muscle activity (history of
          Bells Palsy, Myasthenia Gravis, Multiple Sclerosis)
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Bleeding disorders, or those taking drugs that affects bleeding time
          (warfarin heparin, aspirin, glucosamine)
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Drugs that may interact with the Botox™ (aminoglycosides
          antibiotics, spectromycin, quinine sulphate)
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Surgery or active infection in the area.
        </p>
      </p>
    ),
  },
  {
    title: "How much does it cost?",
    body: (
      <>
        <p>
          The procedure is charged per area injected. One area can be defined as
          the crows’ feet, or the vertical frown line between the eyebrows or
          the horizontal forehead lines.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          One area injected costs £200 in a female, two areas are charged at
          £250 and 3 areas at £300.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          Men have heavier musculature, especially across the brow and so will
          probably require higher amounts of the drug, and therefore will be
          more expensive:
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          (£220 / £280 / £330 respectively)
        </p>
      </>
    ),
  },
];

const useStyles = makeStyles(() => ({
  mainGrid: {
    marginTop: 30,
    justifyContent: "center",
  },
  accordion: {
    backgroundColor: "rgb(50,181,232)",
  },
  accordionDetails: {
    backgroundColor: "#fff",
    border: "1px solid rgb(138, 138, 138)",
  },
}));
