import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as ChevronRight } from "../Assets/chevron-right.svg";

export const BeforeAfter = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid container xs={12} justify={"center"}>
      <Grid xs={8} item container className={styles.mainGrid} spacing={6}>
        <Grid xs={12}>
          <p className={textStyles.blueTitle}>EXAMPLES OF OUR TREATMENTS</p>
        </Grid>
        <Grid xs={12} sm={6} item>
          <img src="/before-after-brow-lines.jpg" className={styles.image} />
        </Grid>
        <Grid xs={12} sm={6} item>
          <img src="/before-after-crows-feet.jpg" className={styles.image} />
        </Grid>
        <Grid xs={12} sm={6} item>
          <img src="/before-after-lip-enhancement.jpg" className={styles.image} />
        </Grid>
        <Grid xs={12} sm={6} item>
          <img src="/before-after-nasolabial-folds.jpg" className={styles.image} />
        </Grid>
        <Grid xs={12} sm={6} item>
          <img src="/before-after-nasolabial-folds2.jpg" className={styles.image} />
        </Grid>
        <Grid xs={12} sm={6} item>
          <img src="/before-after-vermillion-border.jpg" className={styles.image} />
        </Grid>
        <Grid xs={12} sm={6} item>
          <img src="/before-after-forehead-lines.jpg" className={styles.image} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  mainGrid: {
    marginTop: 30,
  },
  image: {
    width: "100%",
    marginBottom: 20,
  },
}));
