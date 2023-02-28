import React from 'react';
import PokemonType from '../atoms/PokemonType';
import { Stack } from '@mui/system';

const PokemonTypes = ({ pokemonTypes, language }) => {
    return (
        <Stack direction={'row'}>
            {pokemonTypes.map((pokemonType, index) => {
                console.log(index, pokemonType.translations['en']);
                return (
                    <PokemonType
                        key={pokemonType.translations['en']}
                        pokemonType={pokemonType}
                        language={language}
                    />
                );
            })}
        </Stack>
    );
};

export default PokemonTypes;
