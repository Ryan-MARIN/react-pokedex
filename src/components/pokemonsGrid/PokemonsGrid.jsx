import { Grid } from '@mui/material';
import React from 'react';
import PokemonCard from './molecules/PokemonCard';
import OnePiece from 'components/easterEggs/OnePiece';
import { Stack } from '@mui/system';
import SearchBar from 'components/header/molecules/SearchBar';

const PokemonsGrid = ({ searchQuery, language, pokemons, types, onInputSearchBar }) => {
    const regexp = new RegExp(searchQuery, 'i');

    return (
        <Stack>
            <SearchBar
                display={{ xs: 'inherit', md: 'none' }}
                searchQuery={searchQuery}
                onInputSearchBar={onInputSearchBar}
                sx={{ mb: '0.5rem' }}
            />
            <Grid container display={'flex'}>
                <Grid
                    item
                    id="one-piece"
                    style={{ display: 'none' }}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <OnePiece />
                </Grid>
                {pokemons.map((pokemon) => {
                    if (pokemon.names[language].match(regexp))
                        return (
                            <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                                <PokemonCard
                                    id={pokemon.id}
                                    englishName={pokemon.names.en}
                                    name={pokemon.names[language]}
                                    img={pokemon.image}
                                    pokemonTypes={pokemon.types.map((pokemonType) => {
                                        return types[pokemonType];
                                    })}
                                    language={language}
                                />
                            </Grid>
                        );
                    return null;
                })}
            </Grid>
        </Stack>
    );
};

export default PokemonsGrid;
