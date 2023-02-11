import { Grid } from '@mui/material';
import React from 'react';
import PokemonCard from './atoms/PokemonCard';

const PokemonsGrid = () => {
    return (
        <Grid spacing={1} container display={'flex'}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard></PokemonCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard></PokemonCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard></PokemonCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard></PokemonCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard></PokemonCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard></PokemonCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard></PokemonCard>
            </Grid>
        </Grid>
    );
};

export default PokemonsGrid;
