import { Grid } from '@mui/material';
import React from 'react';
import PokemonCard from './atoms/PokemonCard';

const PokemonsGrid = () => {
    const pkmns = ['bulbi', 'sala', 'cara', 'pika'];
    return (
        <Grid spacing={2} container display={'flex'}>
            {/* {pkmns.forEach((pkmn) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <PokemonCard name={pkmn}></PokemonCard>
                </Grid>
            ))} */}
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard name={pkmns[0]}></PokemonCard>
            </Grid>
        </Grid>
    );
};

export default PokemonsGrid;
