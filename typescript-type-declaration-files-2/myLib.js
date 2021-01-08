const myLib = {
    makeGreeting: (name) => {
        this.numberOfGreetings++;
        return `Hello, ${name}`;
    },
    numberOfGreetings: 0,
};

export default myLib;
