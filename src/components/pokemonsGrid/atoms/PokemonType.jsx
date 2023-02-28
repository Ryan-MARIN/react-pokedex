import React from 'react';

const PokemonType = ({ pokemonType, language }) => {
    return (
        <div
            style={{
                backgroundColor: pokemonType.backgroundColor,
                borderRadius: '100rem',
                padding: '0.125rem 0.5rem 0.125rem 0.5rem',
                margin: '0rem 0.125rem 0rem 0.125rem',
                fontSize: '12px',
                color: 'white',
            }}
        >
            {pokemonType.translations[language].toUpperCase()}
        </div>
    );
};

export default PokemonType;
