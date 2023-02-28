import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/system';

const SearchBar = ({ display, searchQuery, onInputSearchBar, sx }) => {
    function easterEggs(searchQuery) {
        if (searchQuery.match(/^one piece$/i))
            document.getElementById('one-piece').style.display = 'flex';
        else document.getElementById('one-piece').style.display = 'none';
    }

    function handleValidate(searchQuery) {
        easterEggs(searchQuery);
    }

    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            sx={{
                backgroundColor: 'white',
                borderRadius: '100rem',
                pl: '1rem',
                borderStyle: 'none',
                flexGrow: 1,
                display: display,
                ...sx,
            }}
        >
            <InputBase
                onInput={(e) => {
                    onInputSearchBar(e.target.value);
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleValidate(searchQuery);
                    }
                }}
                placeholder="Recherchez un Pokémon..."
                sx={{
                    borderStyle: 'none',
                    flexGrow: 1,
                }}
                autoFocus
            />
            <IconButton
                type="submit"
                aria-label="search"
                onClick={() => {
                    handleValidate(searchQuery);
                }}
            >
                <SearchIcon style={{ fill: 'red' }} />
            </IconButton>
        </Stack>
    );
};

export default SearchBar;
