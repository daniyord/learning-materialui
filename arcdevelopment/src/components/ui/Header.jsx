import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tab, Tabs, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

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
    height: '7.5rem',
  },
  logo: {
    height: '7rem',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } //else if (window.location.pathname === '/estimate' && value !== 5) {
    //setValue(5);
    //}
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
              <img alt="company logo" src={logo} className={classes.logo} />
            </Button>

            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
              <Tab className={classes.tab} component={Link} label="Home" to="/" />
              <Tab className={classes.tab} component={Link} label="Services" to="/services" />
              <Tab className={classes.tab} component={Link} label="The Revolution" to="/revolution" />
              <Tab className={classes.tab} component={Link} label="About Us" to="/about" />
              <Tab className={classes.tab} component={Link} label="Contact Us" to="/contact" />
            </Tabs>

            <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate">
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
