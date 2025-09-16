import React from "react";
import {
    makeStyles,
    Box,
    Grid,
    Hidden,
    Button,
    TextField,
} from "@material-ui/core";
import { useTextStyles } from "../TextStyles/textStyles";
import { ReactComponent as Location } from "../Assets/location.svg";
import ScrollAnimation from "react-animate-on-scroll";

export const Contact = () => {
    const textStyles = useTextStyles();
    const style = useStyles();

    return (
        <Grid container xs={12} style={{ justifyContent: "center" }}>
            <Grid item container xs={12} md={8}>
                <Grid
                    item
                    xs={12}
                    style={{ height: 100, position: "relative" }}
                >
                    <div style={{ position: "absolute", zIndex: 5 }}>
                        <p className={textStyles.whiteTitle}>
                            <ScrollAnimation
                                animateIn="animate__fadeInLeft"
                                duration={1}
                                animateOnce={true}
                            >
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
                                    "linear-gradient(90deg, rgba(67,168,215,1) 0%, rgba(67,168,215,1) 40%, rgba(255,255,255,0.75) 100%)",
                                zIndex: 0,
                            }}
                        />
                    </Hidden>
                    <Hidden mdUp>
                        <div
                            style={{
                                position: "absolute",
                                height: 50,
                                width: "100vw",
                                top: "30%",
                                background: "rgba(67,168,215,1)",
                                zIndex: 0,
                            }}
                        />
                    </Hidden>
                </Grid>

                <Grid
                    item
                    container
                    xs={12}
                    md={12}
                    style={{ justifyContent: "center" }}
                >
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
                                {/* Formspree form */}
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    style={{ width: "100%" }}
                                >
                                    <form
                                        action="https://formspree.io/f/xandgnjy"
                                        method="POST"
                                        style={{ width: "100%" }}
                                    >
                                        <TextField
                                            label="Name"
                                            name="name"
                                            fullWidth
                                            style={{
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                            required
                                        />
                                        <TextField
                                            label="Email"
                                            type="email"
                                            name="email"
                                            fullWidth
                                            style={{
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                            required
                                        />
                                        <TextField
                                            label="Message"
                                            name="message"
                                            rows={5}
                                            multiline
                                            fullWidth
                                            style={{
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                            required
                                        />
                                        <Box>
                                            <Button
                                                type="submit"
                                                style={{
                                                    backgroundColor:
                                                        "rgb(67, 168, 215)",
                                                    borderRadius: 2,
                                                    color: "#fff",
                                                    marginTop: 2,
                                                    width: 150,
                                                    padding: 2,
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Box>
                                    </form>
                                </Box>

                                <div style={{ position: "relative" }}>
                                    <p
                                        className={textStyles.contentTextFAQ}
                                        style={{
                                            fontSize: 26,
                                            textAlign: "left",
                                        }}
                                    >
                                        ADDRESS
                                        <Location
                                            style={{
                                                marginLeft: 10,
                                                height: 30,
                                                width: 30,
                                                opacity: 0.6,
                                            }}
                                        />
                                    </p>
                                </div>

                                <p className={textStyles.contentText}>
                                    Len Valley Surgery
                                </p>
                                <p className={textStyles.contentText}>
                                    Groom Way
                                </p>
                                <p className={textStyles.contentText}>Lenham</p>
                                <p className={textStyles.contentText}>
                                    Kent ME17 2QF
                                </p>
                                <p
                                    className={textStyles.contentText}
                                    style={{ marginTop: 20 }}
                                >
                                    Telephone:{" "}
                                    <a href="tel:016228583415">01622 858341</a>
                                </p>

                                <p
                                    className={textStyles.contentText}
                                    style={{
                                        textAlign: "left",
                                        marginTop: 40,
                                        marginBottom: 30,
                                    }}
                                >
                                    We also offer a discrete and confidential
                                    service to clients providing Consultations
                                    and Treatments in the comfort of your own
                                    home for privacy and convenience.
                                </p>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.9951482819793!2d0.7213225159759581!3d51.23758423821564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df29bc44a800b5%3A0x29dc866bbb1606ae!2sThe%20Len%20Valley%20Practice!5e0!3m2!1sen!2suk!4v1637762678624!5m2!1sen!2suk"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
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
