import { ButtonBase, CardActionArea, Paper } from '@mui/material';
import { Box, Stack } from '@mui/system';
import PokemonTypes from 'components/pokemonsGrid/molecules/PokemonTypes';
import { Link, useParams } from 'react-router-dom';

const PokemonsDetails = ({ language, types, pokemons }) => {
    const { pokemonId } = useParams();
    const pokemon = pokemons[pokemonId - 1];
    return (
        <>
            <Stack direction={'row'} justifyContent={'space-around'}>
                <Link to={'/'} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <ButtonBase
                        variant={'contained'}
                        sx={{
                            bgcolor: 'red',
                            borderRadius: '100px',
                            pt: '0.5rem',
                            pb: '0.75rem',
                            px: '1rem',
                        }}
                    >
                        🡠&nbsp;&nbsp;Retour
                    </ButtonBase>
                </Link>
            </Stack>
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
                    <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                        {pokemon.names[language]}
                    </Box>
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
                </Stack>
            </Paper>
        </>
    );
    // <div
    //     style={{
    //         padding: '0.5rem',
    //         justifyContent: 'center',
    //     }}
    // >
    //     <Stack
    //         direction={'row'}
    //         alignItems={'top'}
    //         justifyContent={'space-between'}
    //         sx={{
    //             '&:hover': {
    //                 color: 'red',
    //             },
    //         }}
    //     >
    //         <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</Box>
    //         <Box>No.{id.toString().padStart(3, '0')}</Box>
    //     </Stack>
    //     <Stack alignItems={'center'} justifyContent={'space-between'}>
    //         <img src={img} alt={name.toLowerCase()} loading="lazy" />
    //         <PokemonTypes pokemonTypes={pokemonTypes} language={language} />
    //     </Stack>
    // </div>;
};

export default PokemonsDetails;
