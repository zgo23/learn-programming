type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Operator = "+" | "-" | "*" | "/";

function isDigit(char: string): char is Digit {
    return char.length === 1 && char >= "0" && char <= "9";
}

function isOperator(char: string): char is Operator {
    return char.length === 1 && ["+", "-", "*", "/"].indexOf(char) > -1;
}

export class Calculator {
    private current = 0;
    private memory = 0;
    private operator: Operator | null = null;

    protected processDigit(digit: Digit, currentValue: number): number {
        return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
    }

    protected evaluateOperator(
        operator: Operator,
        left: number,
        right: number
    ): number {
        switch (operator) {
            case "+":
                return left + right;
            case "-":
                return left - right;
            case "*":
                return left * right;
            case "/":
                return left / right;
        }
    }

    private evaluate() {
        if (this.operator) {
            this.memory = this.evaluateOperator(
                this.operator,
                this.memory,
                this.current
            );
        } else {
            this.memory = this.current;
        }
        this.current = 0;
    }

    public handleChar(char: string): undefined | never {
        if (char === "=") {
            this.evaluate();
            return;
        } else {
            if (isDigit(char)) {
                this.current = this.processDigit(char, this.current);
                return;
            } else if (isOperator(char)) {
                this.evaluate();
                this.operator = char;
                return;
            }
        }
        throw new Error(`Unsupported input: '${char}'`);
    }

    public getResult() {
        return this.memory;
    }
}

export function test(c: Calculator, input: string) {
    for (let i = 0; i < input.length; i++) {
        c.handleChar(input[i]);
    }
    console.log(`result of '${input} is '${c.getResult()}'`);
}
