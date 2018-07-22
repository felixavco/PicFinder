import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './NavBarStyles'
import { withStyles } from '@material-ui/core/styles';

const NavBar = (props) => {
  const { classes } = props
  return (
    <AppBar position="static">
      <div className="container">
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            PicFinder
          </Typography>
        </Toolbar>
      </div>
    </AppBar>

  )
};

export default withStyles(styles) (NavBar);
