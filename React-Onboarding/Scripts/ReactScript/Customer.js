import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Customer extends Component {
    state = {
        isWorking: false
    }
    letsArrow = () => {
        console.log("the arrow function works");
 
        this.setState((prev, props) => {
            return { isWorking: !prev.isWorking };
        });
    }
    render() {
        return (
            <div>
                <Button content='with semantic' onClick={this.letsArrow} primary />
                Default is false ----- >  {`[state : { isWorking : ${this.state.isWorking} }]`}
            </div>
        );
    }
}

export default Customer;