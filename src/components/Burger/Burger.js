import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import './Burger.css';

const burger=(props)=>{
    return(
        <div className='Burger'>
            <BurgerIngredients type='bread-top'/>
            <BurgerIngredients type='cheese'/>
            <BurgerIngredients type='cheese'/>
            <BurgerIngredients type='salad'/>
            <BurgerIngredients type='bread-bottom'/>
        </div>
    );
}
export default burger;