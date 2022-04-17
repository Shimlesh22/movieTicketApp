import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import headerStyles from './HeaderStyle'
import MenuIcon from '@material-ui/icons/Menu';

import TheatersIcon from '@material-ui/icons/Theaters';
import muiTheme from '../../themes/mui';
import Search from '../Search/Search'
import { ThemeProvider } from '@material-ui/core/styles';



const baseUrl = "https://image.tmdb.org/t/p/original/";
export default function Header() {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
    <ThemeProvider theme={muiTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="open drawer"
    >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
             E CUBE MOVIES
          </Typography>
          <div className={classes.search}>
        
         
          </div>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
    );
}
