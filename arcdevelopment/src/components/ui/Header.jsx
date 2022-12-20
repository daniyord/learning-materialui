import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/logo.svg";

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    height: "7.5em",
  },
  logo: {
    height: "7em",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={classes.logoImage} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
