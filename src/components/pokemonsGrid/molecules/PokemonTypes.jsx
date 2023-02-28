import React, { useEffect, useState } from 'react';
import PokemonType from '../atoms/PokemonType';
import { Stack } from '@mui/system';

const PokemonTypes = ({ pokemonTypes, language }) => {
    return (
        <Stack direction={'row'}>
            {pokemonTypes.map((pokemonType) => (
                <PokemonType pokemonType={pokemonType} language={language} />
            ))}
        </Stack>
    );
};

export default PokemonTypes;
