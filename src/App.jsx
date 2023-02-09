import Header from "./components/Header";
import PokemonsGrid from "./components/PokemonsGrid";
import { React } from "react";
import "./index.css";
import { Box } from "@mui/system";

function App() {
    return (
        <Box paddingTop={"64px"} paddingX={{ xs: "16px", sm: "24px" }}>
            <Header />
            <PokemonsGrid />
        </Box>
    );
}

export default App;
