import Header from "./components/header/Header";
import PokemonsGrid from "./components/pokemonsGrid/PokemonsGrid";
import { React } from "react";
import "./index.css";
import { Box } from "@mui/system";
import Footer from "./components/Footer";

function App() {
    return (
        <Box paddingTop={"64px"} paddingX={{ xs: "16px", sm: "24px" }}>
            <Header />
            <PokemonsGrid />
            <Footer />
        </Box>
    );
}

export default App;
