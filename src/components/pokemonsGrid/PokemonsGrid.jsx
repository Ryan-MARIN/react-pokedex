import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PokemonCard from './molecules/PokemonCard';
import OnePiece from 'components/easterEggs/OnePiece';

const PokemonsGrid = ({ searchQuery }) => {
    const regexp = new RegExp(searchQuery, 'i');

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        fetch('https://pokedex-jgabriele.vercel.app/pokemons.json', {})
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data);
            });
    });

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
                if (pokemon.names.fr.match(regexp))
                    return (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <PokemonCard
                                id={pokemon.id}
                                name={pokemon.names.fr}
                                img={pokemon.image}
                                pokemonTypes={pokemon.types}
                                englishName={pokemon.names.en}
                            ></PokemonCard>
                        </Grid>
                    );
                return null;
            })}
        </Grid>
    );
};

export default PokemonsGrid;
