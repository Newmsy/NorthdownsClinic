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
import { HashLink as Link } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";

export const Dermal = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid container xs={12} justify={"center"}>
      <Grid xs={8} item container className={styles.mainGrid}>
        <Grid item container xs={12}>
          <Grid item xs={12} style={{ position: "relative", height: 100 }}>
            <div
              style={{
                position: "absolute",
                zIndex: 5,
              }}
            >
              <p className={textStyles.whiteTitle} style={{ zIndex: 5 }}>
                DERMAL FILLERS
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
          <Grid item xs={6}>
            <img
              src="/dermal-filler-injections.jpg"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5}>
            <p className={textStyles.contentText} style={{ fontSize: 20 }}>
              As your skin ages, it loses the collagen that helps shape and
              support it. Natural lines and wrinkles deepen. Sun exposure,
              smoking, air pollution and even stress can all age your
              appearance. The face can also begin to lose volume giving sunken
              cheeks and a ‘dragged down’ appearance.
            </p>{" "}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{
          background:
            "linear-gradient(0deg, rgba(200,200,200,0) 0%, rgba(200,200,200,0.2049194677871149) 100%)",
          justifyContent: "center",
          marginTop: 50,
        }}
        justifyContent="center"
      >
        <Grid item container xs={8}>
          <ScrollAnimation
            animateIn="animate__zoomIn"
            duration={1}
            animateOnce={true}
          >
            <Grid item xs={12} style={{ marginBottom: 0 }}>
              <p className={textStyles.blueTitle}>FREQUENTLY ASKED QUESTIONS</p>
            </Grid>
          </ScrollAnimation>
          <Grid item container xs={12} style={{ marginBottom: 50 }}>
            {details.map((detail, index) => {
              return (
                <Grid item xs={6}>
                  <ScrollAnimation
                    animateIn="animate__fadeInDown"
                    duration={1}
                    animateOnce={true}
                    delay={index % 2 === 0 ? 0 : 100}
                  >
                    <Link
                      to={`/treatments/dermal-fillers#${index}`}
                      smooth
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        className={textStyles.contentTextFAQ}
                        style={{ fontSize: 26 }}
                      >
                        <ChevronRight style={{ marginRight: 10 }} />
                        {detail.title}
                      </p>
                    </Link>
                  </ScrollAnimation>
                </Grid>
              );
            })}
            <p className={textStyles.blueTitle}></p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        style={{
          justifyContent: "center",
        }}
        justifyContent="center"
      >
        <Grid item container xs={8}>
          {details.map((detail, index) => (
            <FAQs title={detail.title} body={detail.body} index={index} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const FAQs = ({ title, body, index }) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid
      item
      container
      xs={12}
      style={{
        justifyContent: "center",
        borderBottom: "1px solid rgba(67,168,215, 0.5)",
        paddingBottom: 30,
      }}
    >
      <Grid item xs={12} style={{ magrinBottom: 40 }}>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          duration={1}
          animateOnce={true}
        >
          <p className={textStyles.blueTitle} id={`${index}`}>
            {title}
          </p>
        </ScrollAnimation>
      </Grid>
      <Grid item xs={10} style={{ magrinBottom: 40 }}>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          duration={1}
          animateOnce={true}
          delay={300}
        >
          <p className={textStyles.contentText} style={{ fontSize: 24 }}>
            {body}
          </p>
        </ScrollAnimation>
      </Grid>
    </Grid>
  );
};
const details = [
  {
    title: "What are dermal fillers?",
    body: (
      <p>
        Dermal fillers are injectable treatments to reduce the appearance of
        lines and wrinkles by plumping out the lines. Collagen was first used in
        1976, but there has been demand for non animal sourced and longer
        lasting products as collagen is derived from the skin of cattle. Over
        the last 5-6 years, products containing hyaluronic acid (eg Juvéderm™)
        have become available and proving to be more popular.
      </p>
    ),
  },
  {
    title: "What is Hyaluronic acid?",
    body: (
      <p>
        Hyaluronic acid is a natural polysaccharide that exists in all living
        organisms. The hyaluronic acid in dermal fillers is produced
        biosynthetically through bacterial fermentation, so it is biocompatible
        and there is no risk of transmitting disease. The gel is able to
        integrate with adjacent tissues, allowing passage of oxygen and
        nutrients. Juverderm's hyaluronic acid molecules are cross linked which
        make it longer lasting, but not permanent. The gel particles are
        absorbed slowly and water tasks its place. When totally absorbed, the
        gel disappears unnoticed from the body.
      </p>
    ),
  },
  {
    title: "Which areas can be treated?",
    body: (
      <p>
        The cosmetic 'Polyfiller' has a range of uses, including lip sculpture,
        filling lines and folds.
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Deep smile lines which run from the side of the nose to the corners
          of the mouth (the nasolabial lines)
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Crows feet at the corner of the eyes
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Frown lines between the eyebrows
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          • Smokers’ lines which are vertical lines on the top lip • Marionette
          lines at the corners of the mouth
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          • ‘worry lines’ which run across the forehead
        </p>
        <p style={{ marginTop: 2, marginBottom: 20 }}>
          • The definition of the lip border
        </p>
        They can also be used to improve
        <p style={{ marginTop: 2, marginBottom: 2 }}>• Acne scars</p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Depressions or pockmarks in the skin due to injury or disease e.g.
          chicken pox marks
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Unevenness in the skin after surgery or skin grafting
        </p>
      </p>
    ),
  },
  {
    title: "How is it given?",
    body: (
      <p>
        Dermal fillers must be administered only by doctors and nurses. A
        combination of numbing creams and or local anaesthetic injections are
        used to make the procedure as comfortable as possible, and treatment
        time can take an average of 45 minutes, depends on which areas are
        treated, but the results are instantaneous.
      </p>
    ),
  },
  {
    title: "How long does it last?",
    body: (
      <p>
        Trials indicate that Juvéderm™ can be effective for 9 months to a year
        for the treatment of wrinkles and for around 6 months for lip
        augmentation.
      </p>
    ),
  },
  {
    title: "Are there any downsides?",
    body: (
      <>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Mild bruising – may take 2-3 days to vanish
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          • Transient redness, swelling, itching or discomfort. In the case of
          lip augmentation, the swelling can be considerable for a few days
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Discolouration at the implant site – this usually resolves
          spontaneously within 1-2 days, within a week after lip augmentation
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Palpable lumpiness at the implant site – temporary
        </p>
      </>
    ),
  },
  {
    title: "What can go wrong?",
    body: (
      <p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>• Infection</p>
        <p style={{ marginTop: 2, marginBottom: 2 }}> • Blistering</p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Cold sores – filler injection may cause a break out of cold sores if
          you are known to suffer from these, and so some antiviral tablets can
          be taken prior to injections that will minimise the risk of this
          occurring
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Allergic reaction: Immediate allergic reaction – prolonged redness,
          swelling, itching or hard lumps at the points of injection. Sometimes
          they can last for several months, but this is extremely unusual.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          Delayed allergic reaction – this could happen with a reported
          incidence of 1 in every 8000 patients treated. Red lumps may appear
          underneath the skin and last many months, but in a small number of
          cases are permanent.
        </p>
      </p>
    ),
  },
  {
    title: "Are there any contraindications to this treatment?",
    body: (
      <p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Active infection of the skin eg acne or cellulitis
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Known allergy to hyaluronic acid
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          • Pregnancy and breastfeeding
        </p>
      </p>
    ),
  },
  {
    title: "What product is used?",
    body: (
      <>
        <p>
          We use Juvéderm™ ULTRA range of dermal fillers from ALLERGAN, a world
          leader in surgical and no-surgical aesthetic products. Unlike other
          dermal fillers the Juvéderm™ ULTRA range includes a mild anaesthetic
          for a more comfortable injection experience.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          Its comes in 3 formulations for more natural looking customisable
          results.
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          Juvéderm™ ULTRA 2 – treats moderate lines, especially those around the
          lips and corners of the eye and those very close to the surface of the
          skin
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          Juvéderm™ ULTRA 3 – smoothes wrinkles between the nose and the corner
          of the mouth as well as around the lips. It can be used very subtly to
          plump out the lips to maintain the smile
        </p>
        <p style={{ marginTop: 2, marginBottom: 2 }}>
          {" "}
          Juvéderm™ ULTRA 4 – works on the most noticeable folds and lines, and
          improves the contour of the face
        </p>
      </>
    ),
  },
  {
    title: "How much does it cost?",
    body: (
      <p>
        Cost will depend on the number of syringes needed to create the desired
        effect and the formulation used. Prices start at £220 per 0.5ml syringe
        of Juvéderm™ ULTRA 2. One syringe is usually sufficient for mild ‘deep
        smile’ lines.
      </p>
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
