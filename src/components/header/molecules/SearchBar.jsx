import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/system';
import { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState(null);

    function handleValidate(searchQuery) {}

    return (
        <Stack direction={'row'} alignItems={'center'} style={{ width: '30rem' }}>
            <InputBase
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                placeholder="Recherchez un Pokémon..."
                style={{
                    backgroundColor: 'white',
                    borderRadius: '100rem',
                    padding: '0rem 0.5rem 0rem',
                    borderStyle: 'none',
                    flexGrow: 1,
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleValidate(searchQuery);
                    }
                }}
                onChange={(e) => {
                    if (e.target.value.match(/^one piece$/i)) {
                        document.getElementById('one-piece').style.display = 'flex';
                    } else if (document.getElementById('one-piece').style.display !== 'none') {
                        document.getElementById('one-piece').style.display = 'none';
                    }
                }}
            />
            <IconButton
                type="submit"
                aria-label="search"
                onClick={() => {
                    handleValidate();
                }}
            >
                <SearchIcon style={{ fill: 'red' }} />
            </IconButton>
        </Stack>
    );
};

export default SearchBar;
