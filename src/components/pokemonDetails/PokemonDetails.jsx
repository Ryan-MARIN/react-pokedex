import { Paper } from '@mui/material';
import { Box, Stack } from '@mui/system';
import PokemonTypes from 'components/pokemonsGrid/molecules/PokemonTypes';
import { useParams } from 'react-router-dom';

const PokemonDetails = ({ language, types, pokemons, pokemonId }) => {
    const pokemon = pokemons[pokemonId - 1];
    return (
        <Paper
            elevation={6}
            sx={{
                p: '1rem',
                my: '1rem',
                borderRadius: '1rem',
                bgcolor: 'white',
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
                <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>{pokemon.names[language]}</Box>
                <Box>No.{pokemon.id.toString().padStart(3, '0')}</Box>
            </Stack>
            <Stack alignItems={'center'} justifyContent={'space-between'}>
                <img src={pokemon.image} alt={pokemon.names[language]} loading="lazy" />
                <PokemonTypes
                    pokemonTypes={pokemon.types.map((pokemonType) => {
                        return types[pokemonType];
                    })}
                    language={language}
                />
                <Stack spacing={1} sx={{ pt: '1rem' }} alignItems="center">
                    <span>
                        Poids : <b>{pokemon.weight}</b>
                    </span>
                    <span>
                        Taille : <b>{pokemon.height}</b>
                    </span>
                    <Paper
                        elevation={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 1,
                            borderRadius: '1rem',
                        }}
                    >
                        <b>Capacités</b>
                        <ul>
                            {pokemon.moves.map((move) => {
                                return <li key={move}>{move}</li>;
                            })}
                        </ul>
                    </Paper>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default PokemonDetails;
