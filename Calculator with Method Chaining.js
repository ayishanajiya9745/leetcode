class Calculator {
    constructor(initialValue) {
        this.result = initialValue;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result **= value;
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Function to process the input actions and values
function calculatorOperations(actions, values) {
    let calc = null;
    let result = null;
    
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const value = values[i] !== undefined ? values[i] : null;
        
        if (action === "Calculator") {
            calc = new Calculator(value);
        } else if (action === "add") {
            calc.add(value);
        } else if (action === "subtract") {
            calc.subtract(value);
        } else if (action === "multiply") {
            calc.multiply(value);
        } else if (action === "divide") {
            try {
                calc.divide(value);
            } catch (e) {
                result = e.message;
                break;
            }
        } else if (action === "power") {
            calc.power(value);
        } else if (action === "getResult") {
            result = calc.getResult();
        }
    }

    return result;
}

