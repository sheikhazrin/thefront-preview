import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  List,
  ListItem,
  Container,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";

import { NavLink, preventDefault } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

import { Image } from "components/atoms";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    color: "rgba(255,255,255,.6)",
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  blocktitle: {
    fontSize: 24,
    colorRendering: "#ffffff",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
}));

const Footer = (props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <section>
          <Container maxWidth="lg" className="root--white">
            <Box py={6}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <List disablePadding>
                    <ListItem disableGutters>Accessibility</ListItem>
                    <ListItem disableGutters>ASds</ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={4}>
                  <List disablePadding>
                    <ListItem disableGutters>Accessibility</ListItem>
                    <ListItem disableGutters>ASds</ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={4}>
                  <List disablePadding>
                    <ListItem disableGutters>Accessibility</ListItem>
                    <ListItem disableGutters>ASds</ListItem>
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
