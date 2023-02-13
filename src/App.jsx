import Header from 'components/header/Header';
import PokemonsGrid from 'components/pokemonsGrid/PokemonsGrid';
import { React, useState } from 'react';
import './styles/index.css';
import './styles/scrollbar.css';
import { Box } from '@mui/system';
import Footer from 'components/Footer';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    function onInputSearchBar(value) {
        setSearchQuery(value);
    }

    return (
        <Box paddingTop={'4rem'} paddingX={{ xs: '1rem', sm: '1.5rem' }}>
            <Header searchQuery={searchQuery} onInputSearchBar={onInputSearchBar} />
            <PokemonsGrid searchQuery={searchQuery} />
            <Footer />
        </Box>
    );
}

export default App;
