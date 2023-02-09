import { Grid, Paper } from "@mui/material";
import React from "react";

const PokemonsGrid = () => {
    return (
        <Grid container display={"flex"}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper style={{ padding: "5px" }}>TODO PokemonsGrid</Paper>
            </Grid>
        </Grid>
    );
};

export default PokemonsGrid;
