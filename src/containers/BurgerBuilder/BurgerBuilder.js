import React, { Component } from 'react';

import AuxHeader from '../../hoc/AuxHeader';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        }
    }

    render () {
        return (
            <AuxHeader>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </AuxHeader>
        );
    }
}

export default BurgerBuilder;