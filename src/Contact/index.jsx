import React from "react";
import { makeStyles, Box, Grid, Hidden, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as Location } from "../Assets/location.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { HashLink as Link } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const Contact = () => {
  const textStyles = useTextStyles();
  const style = useStyles();
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errorState, setError] = React.useState("");
  const [successState, setSuccess] = React.useState(false);
  const [loadingState, setLoading] = React.useState(false);

  const validateForm = React.useCallback(() => {
    if (emailRegex.test(email) && message.length > 0 && name.length > 0) return true;
    setError(true);
    return false;
  }, [email, message.length, name]);

  const scriptCallback = React.useCallback(async () => {
    if (!validateForm()) return;
    setLoading(true);
    var dataSend = {
      dataReq: {
        email: email,
        message: message,
        name: name,
      },
      fname: "uploadFilesToGoogleDrive",
    }; //preapre info to send to API
    if (dataSend.dataReq.email.length > 0 && dataSend.dataReq.message.length > 0 && dataSend.dataReq.name.length > 0) {
      setError(false);
      fetch(
        "https://script.google.com/macros/s/AKfycbxtmBFuidlnFJDTNvJGLKlcL_HrDYmZyozAy2hS_0UwOVlu2U0Y8xFla98dKvmox2c/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((a) => {
          setLoading(false);
          setSuccess(true);
        })
        .catch((e) => console.log(e));
    } else {
      setError(true);
    }
  }, [email, message, name, validateForm]);
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
                {successState === true && (
                  <Box sx={{ backgroundColor: "#fff", borderRadius: 5, padding: 10, paddingTop: 5 }}>
                    <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "left" }}>
                      Thank you for your contact submission.
                    </p>
                  </Box>
                )}
                {successState === false && (
                  <Box display="flex" flexDirection="column" alignItems="center" style={{ width: "100%" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" style={{ width: "100%" }}>
                      <TextField
                        label={"Name"}
                        id="custom-css-outlined-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        style={{ marginTop: 10, marginBottom: 10 }}
                      />

                      <TextField
                        label="Email"
                        id="custom-css-outlined-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        style={{ marginTop: 10, marginBottom: 10 }}
                      />

                      <TextField
                        label={"Message"}
                        id="custom-css-outlined-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        multiline={true}
                        fullWidth
                        style={{ marginTop: 10, marginBottom: 10 }}
                      />
                    </Box>

                    {loadingState === true && (
                      <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "left" }}>
                        Submitting...
                      </p>
                    )}
                    {errorState === true && (
                      <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "left" }}>
                        Please fill in all the inputs before submitting.
                      </p>
                    )}
                    {loadingState === false && (
                      <Box>
                        <Button
                          onClick={() => scriptCallback()}
                          style={{
                            backgroundColor: "rgb(67, 168, 215)",
                            borderRadius: 2,
                            color: "#fff",
                            marginTop: 2,
                            width: 150,
                            padding: 2,
                            "&:hover": {
                              backgroundColor: "rgba(67, 168, 215, 0.6);",
                            },
                          }}
                        >
                          Submit
                        </Button>
                      </Box>
                    )}
                  </Box>
                )}
                <div style={{ position: "relative" }}>
                  <p className={textStyles.contentTextFAQ} style={{ fontSize: 26, textAlign: "left" }}>
                    ADDRESS
                    <Location style={{ marginLeft: 10, height: 30, width: 30, opacity: 0.6 }} />
                  </p>
                </div>

                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  Len Valley Surgery
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  Groom Way
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  Lenham
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%" }}>
                  Kent ME17 2QF
                </p>
                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%", marginTop: 20 }}>
                  Telephone: <a href="tel:01622 8583415">01622 858341</a>
                </p>
                {/* <p
                  className={textStyles.contentText}
                  style={{ textAlign: "left", margin: 2, width: "100%", marginTop: 20, marginBottom: 20 }}
                >
                  We can also see clients at:
                </p>

                <p className={textStyles.contentText} style={{ textAlign: "left", margin: 2, width: "100%", marginBottom: 2 }}>
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
                </p> */}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.9951482819793!2d0.7213225159759581!3d51.23758423821564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df29bc44a800b5%3A0x29dc866bbb1606ae!2sThe%20Len%20Valley%20Practice!5e0!3m2!1sen!2suk!4v1637762678624!5m2!1sen!2suk"
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
