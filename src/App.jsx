import Header from "./components/Header";
import PokemonsGrid from "./components/PokemonsGrid";

function App() {
    return (
        <div className="App" style={{ backgroundColor: "#000" }}>
            <Header />
            <PokemonsGrid />
        </div>
    );
}

export default App;
