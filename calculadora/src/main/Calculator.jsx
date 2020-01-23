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
        if(this.state.current === 0){
            this.setState({ operation, current: 1, clearDisplay: true})
        }else{
            const equals = operation === "=";
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            let result = 0;
            switch(currentOperation){
                case "*":
                    result = values[0] * values[1];
                    break;
                case "/":
                    result = values[0] / values[1];
                    break;
                case "-":
                    result = values[0] - values[1];
                    break;
                case "+":
                    result = values[0] + values[1];
                    break;
            }
            values[0] = result;

            this.setState({ 
                displayValue : values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            });
        }
    }

    addDigit = (n) =>{
        if(n === '.' && this.state.displayValue.includes('.') )
            return;
        
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({displayValue, clearDisplay: false})

        if(n !== '.'){
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values })
            console.log(values);
        }
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