import Header from 'components/header/Header';
import PokemonsGrid from 'components/pokemonsGrid/PokemonsGrid';
import { React, useEffect, useState } from 'react';
import './styles/index.css';
import './styles/scrollbar.css';
import { Box } from '@mui/system';
import Footer from 'components/Footer';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

function App() {
    const [types, setTypes] = useState([]);
    useEffect(() => {
        fetch('https://pokedex-jgabriele.vercel.app/types.json', {})
            .then((response) => response.json())
            .then((data) => {
                setTypes(data);
            })
            .catch((e) => {
                console.log('ERREUR : Ne parvient pas à afficher les types' + e);
            });
    }, []);

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        fetch('https://pokedex-jgabriele.vercel.app/pokemons.json', {})
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data);
            })
            .catch((e) => {
                console.log('ERREUR : Ne parvient pas à afficher les pokémons' + e);
            });
    }, []);

    const [searchQuery, setSearchQuery] = useState('');
    function onInputSearchBar(value) {
        setSearchQuery(value);
    }

    const [language, setLanguage] = useState('fr');
    function onLanguageChange(event) {
        setLanguage(event.target.value);
    }

    return (
        <BrowserRouter>
            <Box paddingTop={'4rem'} paddingX={{ xs: '1rem', sm: '1.5rem' }}>
                <Header
                    searchQuery={searchQuery}
                    onInputSearchBar={onInputSearchBar}
                    language={language}
                    onLanguageChange={onLanguageChange}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PokemonsGrid
                                searchQuery={searchQuery}
                                onInputSearchBar={onInputSearchBar}
                                language={language}
                                types={types}
                                pokemons={pokemons}
                            />
                        }
                    />
                    <Route
                        path="/:pokemonId"
                        element={
                            <PokemonsGrid
                                searchQuery={searchQuery}
                                onInputSearchBar={onInputSearchBar}
                                language={language}
                                types={types}
                                pokemons={pokemons}
                            />
                        }
                    />
                </Routes>
                <Outlet />
                <Footer />
            </Box>
        </BrowserRouter>
    );
}

export default App;
