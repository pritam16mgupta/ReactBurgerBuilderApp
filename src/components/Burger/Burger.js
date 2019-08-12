import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import './Burger.css';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkeys => [...Array(props.ingredients[igkeys])].map((_, index) => {
            return <BurgerIngredients key={igkeys + index} type={igkeys} />
        })).reduce((oldArr, curArr) => { return oldArr.concat(curArr) }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className='Burger'>
            <BurgerIngredients type='bread-top' />
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    );
}
export default burger;