import { Grid } from '@mui/material';
import React from 'react';
import PokemonCard from './molecules/PokemonCard';
import pokemons from 'ressources/pokemons.json';
import OnePiece from 'components/easterEggs/OnePiece';

const PokemonsGrid = () => {
    return (
        <Grid container display={'flex'}>
            <Grid
                id="one-piece"
                style={{ display: 'none' }}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
            >
                <OnePiece />
            </Grid>
            {pokemons.map((pokemon, index) => {
                return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <PokemonCard
                            id={pokemon.id}
                            name={pokemon.names.fr}
                            img={pokemon.image}
                            pokemonTypes={pokemon.types}
                        ></PokemonCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default PokemonsGrid;
