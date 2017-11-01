import React from 'react';

import classes from './buildcontrols.css';
import BuildControl from './BuildControl';

function buildControls (props) {
  const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
  ];

  return (
    <div className={classes.BuildControls}>
    <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            add={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>ORDER NOW!</button>
    </div>
  );
}

export default buildControls;
