import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearchQuery }) => (
    <form>
        <TextField
            // onInput={(e) => {
            //     setSearchQuery(e.target.value);
            // }}
            label="Recherchez un Pokémon"
            variant="outlined"
            placeholder="Search..."
            size="small"
        />
        <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
    </form>
);
