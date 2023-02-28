import Header from 'components/header/Header';
import PokemonsGrid from 'components/pokemonsGrid/PokemonsGrid';
import { React, useState } from 'react';
import './styles/index.css';
import './styles/scrollbar.css';
import { Box } from '@mui/system';
import Footer from 'components/Footer';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('fr');

    function onInputSearchBar(value) {
        setSearchQuery(value);
    }

    function onLanguageChange(event) {
        setLanguage(event.target.value);
    }

    return (
        <Box paddingTop={'4rem'} paddingX={{ xs: '1rem', sm: '1.5rem' }}>
            <Header
                searchQuery={searchQuery}
                onInputSearchBar={onInputSearchBar}
                language={language}
                onLanguageChange={onLanguageChange}
            />
            <PokemonsGrid searchQuery={searchQuery} language={language} />
            <Footer />
        </Box>
    );
}

export default App;
