import { CardActionArea, Paper, Box } from '@mui/material';
import React from 'react';
import PokemonTypes from './PokemonTypes';
import { Stack } from '@mui/system';

const PokemonCard = ({ id, name, img, pokemonTypes }) => {
    return (
        <Paper
            elevation={6}
            sx={{
                m: '8px',
                borderRadius: '8px',
                overflow: 'hidden',
                '&:hover': {
                    m: '4px',
                    borderRadius: '16px',
                },
            }}
        >
            <CardActionArea
                sx={{
                    '&:hover': { p: '4px' },
                }}
            >
                <div style={{ padding: '8px', justifyContent: 'center' }}>
                    <Stack direction={'row'} alignItems={'top'} justifyContent={'space-between'}>
                        <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</Box>
                        <Box>No.{id}</Box>
                    </Stack>
                    <Stack alignItems={'center'} justifyContent={'space-between'}>
                        <img src={img} alt={name.toLowerCase()} />
                        <PokemonTypes types={pokemonTypes} />
                    </Stack>
                </div>
            </CardActionArea>
        </Paper>
    );
};

export default PokemonCard;
