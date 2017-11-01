import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button';

function orderSummary (props) {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>
          : {props.ingredients[ingKey]}
        </li>
      );
    });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious Burger With The Following Ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button
        btnType="Danger"
        click={props.purchaseCancelled}>CANCEL</Button>
      <Button
        btnType="Success"
        click={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;
