import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

function toolBar (props) {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolBar;
