import "./App.css";
// import GetPreviouseValue from "./get-previous-value/example-2";
// import MeasureDomNode from "./measure-dom-node/example";
// import CounterUseReducer from "./counter-use-reducer/example";
import CounterUseReducer from "./counter-use-reducer/example-2";

function App() {
    return (
        <div className="App">
            <CounterUseReducer initialCount={10} />
        </div>
    );
}

export default App;
