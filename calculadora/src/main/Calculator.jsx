import React, { Component} from 'react';
import './Calculator.css';

import Button from '../components/Button'
import Display from '../components/Display'

let initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values:[0, 0],
    current: 0,
}

export default class Calculator extends Component{
    state = {...initialState};

    clearMemory = () =>{
        this.setState({ ...initialState });
    }

    setOperation = (operation) =>{
        console.log(operation);
    }

    addDigit = (n) =>{
        if(n === '.' && this.state.displayValue.includes('.') )
            return;
        
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({displayValue, clearDisplay: false})
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}