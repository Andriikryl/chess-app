import "./App.css";
import Board from "./components/Board/Board";
import AppContext from "./contexts/Context";

function App() {
  return (
    <AppContext.Provider value={{}}>
      <div className="App">
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export default App;
