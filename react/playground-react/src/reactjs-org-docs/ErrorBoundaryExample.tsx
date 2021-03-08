import React from "react";
import type { ErrorInfo } from "react";

interface ErrorBoundaryState {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props: {}) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

interface BuggyCounterState {
    counter: number;
}
class BuggyCounter extends React.Component<{}, BuggyCounterState> {
    constructor(props: {}) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // componentDidCatch can't catch an exception thrown from an event handler.
        // throw new Error("Can you catch me?");
        this.setState(({ counter }) => ({
            counter: counter + 1,
        }));
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error("I crashed");
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

export default function ErrorBoundaryExample() {
    return (
        <div>
            <p>
                <b>
                    This is an example of error boundaries in React 16.
                    <br />
                    <br />
                    Click on the numbers to increase the counters.
                    <br />
                    The counter is programmed to throw when it reaches 5. This
                    simulates a JavaScript error in a component.
                </b>
            </p>
            <hr />
            <ErrorBoundary>
                <p>
                    These two counters are inside the same error boundary. If
                    one crashes, the error boundary will replace both of them.
                </p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>
                These two counters are each inside of their own error boundary.
                So if one crashes, the other is not affected.
            </p>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    );
}
