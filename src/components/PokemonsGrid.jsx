import { Grid, Paper } from "@mui/material";
import React from "react";
import PokemonCard from "./pokemonsGrid/PokemonCard";

const PokemonsGrid = () => {
    return (
        <Grid container display={"flex"}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard></PokemonCard>
            </Grid>
        </Grid>
    );
};

export default PokemonsGrid;
