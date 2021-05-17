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

export const Hyperhidrosis = () => {
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
          <p className={textStyles.blueTitle}>HYPERHIDROSIS</p>
          <img src="/hyperhidrosis-treatment.jpg" />
          <p className={textStyles.contentText}>
            Northdowns Clinic in is a specialist cosmetic treatment clinic which
            offers hyperhidrosis (excessive sweating) treatment in Kent with
            fast results. We provide competitive, expertise and a wealth of
            medical knowledge for treating problems of excessive sweating which
            will ensure your complete satisfaction.
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
    title: "What is hyperhidrosis?",
    body: (
      <p>
        Hyperhidrosis is excessive sweating caused by overactive eccrine sweat
        glands, which are most frequently found in arm pits or palms.
      </p>
    ),
  },
  {
    title: "How common is hyperhidrosis?",
    body: (
      <p>
        Hyperhidrosis usually affects people in their teens and twenties and 1
        in 200 people on average are approximately affected.
      </p>
    ),
  },
  {
    title: "What causes hyperhidrosis?",
    body: (
      <p>
        The cause of hyperhidrosis is not really known though many people have
        relatives with a similar problem, suggesting there may be a genetic
        cause. It can be associated with other illnesses such as hyperthyroidism
        or diabetes, and is usually ‘generalised’ hyperhidrosis affecting the
        entire body.
      </p>
    ),
  },
  {
    title: "What treatments are available?",
    body: (
      <>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          Self help measures include wearing clothes made from natural fibres,
          ensuring surroundings are cool and well aired, avoiding alcohol, tea,
          coffee and spicy foods, avoiding stress and tension and attention to
          personal hygiene, by taking frequent showers.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          Aluminium Hydroxide based anti-perspirants can be used, but these have
          to be used regularly and can cause skin irritation. Some sufferers
          require surgery in the form of endoscopic cervical sympathectomy.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          A less invasive, but very effective, treatment is to inject Botulinum
          Toxin Type A into the armpits.
        </p>
      </>
    ),
  },
  {
    title: "How does Botulinum Toxin Type A work?",
    body: (
      <p>
        Botulinum Toxin Type A is licensed for severe underarm sweating that is
        not adequately managed with topical agents. Botulinum Toxin Type A
        treatment helps control this condition by temporarily blocking the
        chemical signals from the nerves that stimulate the eccrine sweat
        glands. When the sweat glands don't receive chemical signals, the severe
        sweating stops.
      </p>
    ),
  },
  {
    title:
      "How soon does the treatment work and how long does the effect last?",
    body: (
      <>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          You should notice an improvement within the first week after treatment
          and a significant reduction in underarm sweating within 4 weeks of
          your first treatment. There is a possibility that some sweat glands
          may be missed, and you may continue to experience some sweating from
          the untreated areas. If you do not see a significant reduction in
          sweating, you should contact your healthcare provider and request a
          follow-up consultation.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          The treatment lasts on average between 4 and 7 months.
        </p>
      </>
    ),
  },
  {
    title: "Are there any side effects?",
    body: (
      <p>
        Side effects are generally infrequent. Mostly commonly there may be some
        discomfort at the injection site. Rarely, flu-like symptoms may occur.
        These effects usually disappear within a few days. There may be an
        increase in sweating in other parts of the body and even more rarely
        there maybe slight muscle weakness. These effects tend to disappear
        within 4 months and without requiring any additional treatment.
      </p>
    ),
  },
  {
    title: "Who is not suitable to have Botulinum Toxin Type A treatment?",
    body: (
      <p>
        It is not suitable for people with neuromuscular transmission disorders
        (e.g. Myasthenia Gravis), chronic respiratory problems, coagulation
        disorders or people of are on warfarin (We would need to discuss this
        with the patient first), pregnant women, breastfeeding mums, if there is
        a history of allergy to injection ingredients, if there is infection or
        inflammation over the injection site or if the person is taking any of
        the following medications - aminoglycoside antibiotics, anticoagulants,
        aspirin or muscle relaxants.
      </p>
    ),
  },
  {
    title: "How much does it cost?",
    body: (
      <>
        <p>
          For both arm pits or both palms, the procedure including consultation
          would take up to 1 hour and cost £495.
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
