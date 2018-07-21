import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Settings from '@material-ui/icons/Settings';
import styles from './NavBarStyles'
import IconButton from '@material-ui/core/IconButton';
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
          <IconButton color="default">
            <Settings />
          </IconButton>
        </Toolbar>
      </div>
    </AppBar>

  )
};

export default withStyles(styles) (NavBar);
