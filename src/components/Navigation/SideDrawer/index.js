import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop';
import Aux from '../../../hoc/Aux';

function sideDrawer (props) {
  const isOpen = props.open ? classes.Open : classes.Closed;
  const attachedClasses = [classes.SideDrawer, isOpen];
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;
