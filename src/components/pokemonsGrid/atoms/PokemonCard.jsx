import { Paper } from '@mui/material';
import React from 'react';

const PokemonCard = ({ name }) => {
    return (
        <Paper
            elevation={6}
            style={{
                padding: '8px',
                borderRadius: '8px',
            }}
        >
            {name}
        </Paper>
    );
};

export default PokemonCard;
