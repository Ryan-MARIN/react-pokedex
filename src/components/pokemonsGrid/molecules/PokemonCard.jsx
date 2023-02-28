import { CardActionArea, Paper, Box } from '@mui/material';
import React from 'react';
import PokemonTypes from './PokemonTypes';
import { Stack } from '@mui/system';
// import logoPokedexSmall from 'ressources/logo-pokedex-small.svg';

const PokemonCard = ({ id, name, img, pokemonTypes, englishName, language }) => {
    return (
        <Paper
            elevation={6}
            sx={{
                m: '0.5rem',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                '&:hover': {
                    m: '0.25rem',
                    borderRadius: '1rem',
                },
            }}
        >
            <CardActionArea
                sx={{
                    '&:hover': { p: '0.25rem' },
                }}
            >
                <a
                    href={`https://pokemondb.net/pokedex/${englishName}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'inherit', color: 'inherit' }}
                >
                    <div
                        style={{
                            padding: '0.5rem',
                            justifyContent: 'center',
                        }}
                    >
                        <Stack
                            direction={'row'}
                            alignItems={'top'}
                            justifyContent={'space-between'}
                        >
                            <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</Box>
                            <Box>No.{id.toString().padStart(3, '0')}</Box>
                        </Stack>
                        <Stack alignItems={'center'} justifyContent={'space-between'}>
                            <img src={img} alt={name.toLowerCase()} />
                            <PokemonTypes pokemonTypes={pokemonTypes} language={language} />
                        </Stack>
                    </div>
                </a>
            </CardActionArea>
        </Paper>
    );
};

export default PokemonCard;
