import React from 'react';
import PokemonType from '../atoms/PokemonType';
import { Stack } from '@mui/system';

const PokemonTypes = ({ types }) => {
    return (
        <Stack direction={'row'}>
            <PokemonType type={types[0]} />
            {types[1] ? <PokemonType type={types[1]} /> : null}
        </Stack>
    );
};

export default PokemonTypes;
