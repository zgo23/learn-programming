import "./App.css";

function App() {
    return (
        <div className="App">
            <x-search name="Web Components" />
            <dialog-workflow>
                <one-dialog id="1" />
                <one-dialog id="2" />
                <one-dialog id="3" />
            </dialog-workflow>
        </div>
    );
}

export default App;
