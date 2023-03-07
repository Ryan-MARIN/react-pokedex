import { CardActionArea, Paper, Box, Dialog } from '@mui/material';
import React from 'react';
import PokemonTypes from './PokemonTypes';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PokemonCard = ({ id, name, img, pokemonTypes, language, onClick }) => {
    return (
        <>
            <Paper
                elevation={6}
                sx={{
                    m: '0.5rem',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    '&:hover': {
                        m: '0.25rem',
                        borderRadius: '1rem',
                        bgcolor: 'white',
                    },
                }}
            >
                <CardActionArea
                    sx={{
                        '&:hover': { p: '0.25rem' },
                    }}
                >
                    <Link
                        to={`/${id}`}
                        style={{ textDecoration: 'inherit', color: 'inherit' }}
                        onClick={onClick}
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
                                sx={{
                                    '&:hover': {
                                        color: 'red',
                                    },
                                }}
                            >
                                <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</Box>
                                <Box>No.{id.toString().padStart(3, '0')}</Box>
                            </Stack>
                            <Stack alignItems={'center'} justifyContent={'space-between'}>
                                <img src={img} alt={name.toLowerCase()} loading="lazy" />
                                <PokemonTypes pokemonTypes={pokemonTypes} language={language} />
                            </Stack>
                        </div>
                    </Link>
                </CardActionArea>
            </Paper>
        </>
    );
};

export default PokemonCard;
