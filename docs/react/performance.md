# General

- in React, props and state are both immutable objects
- In React, to render means that the render() method is called, but the method itself doesn’t update the DOM directly.

# Limitations of a none-pure react component

- Although the state or props dont' change, the component re-renders.

# State Batch Updating

- The main idea is that no matter how many **setState** calls you make inside a React event handler or synchronous lifecycle method, it will be batched into a single update.
