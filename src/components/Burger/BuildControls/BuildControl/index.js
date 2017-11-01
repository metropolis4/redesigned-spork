import React from 'react';

import classes from './buildcontrol.css';

function buildControl (props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.More}
        onClick={props.remove}
        disabled={props.disabled}>Less</button>
      <button
        className={classes.Less}
        onClick={props.add}>More</button>
    </div>
  );
}

export default buildControl;
