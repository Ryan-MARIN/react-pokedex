import { IconButton, InputBase, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
import { useState } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState(null);

    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            style={{ width: "500px" }}
        >
            <InputBase
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                    console.log("Search : ", searchQuery);
                }}
                placeholder="Recherchez un Pokémon"
                style={{
                    backgroundColor: "white",
                    borderRadius: "100px",
                    padding: "0px 8px 0px",
                    borderStyle: "none",
                    flexGrow: 1,
                }}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "red" }} />
            </IconButton>
        </Stack>
    );
};

export default SearchBar;
