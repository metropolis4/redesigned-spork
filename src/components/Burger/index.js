import React from 'react';

import classes from './burger.css';
import BurgerIngredient from './BurgerIngredient';

function burger (props) {
  let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    }).reduce( (arr, el) => arr.concat(el), []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please Start Adding Ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
