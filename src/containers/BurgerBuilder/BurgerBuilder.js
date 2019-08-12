import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 2,
            salad: 2,
            bacon: 2,
            meat:6
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>BurgerBuilder</div>
            </Aux>
        )
    }
}
export default BurgerBuilder;