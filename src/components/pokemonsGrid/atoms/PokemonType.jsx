import React from 'react';

function getTypeColor(type) {
    switch (type.toLowerCase()) {
        case 'bug':
            return '#1C4B27';
        case 'dark':
            return '#040706';
        case 'dragon':
            return '#448b95';
        case 'electric':
            return '#c3c30b';
        case 'fairy':
            return '#981844';
        case 'fighting':
            return '#994025';
        case 'fire':
            return '#a92022';
        case 'flying':
            return '#4a677d';
        case 'ghost':
            return '#33336b';
        case 'grass':
            return '#127b3f';
        case 'ground':
            return '#a9702c';
        case 'ice':
            return '#84d2f6';
        case 'normal':
            return '#75515b';
        case 'poison':
            return '#5e2d88';
        case 'psychic':
            return '#a32b6c';
        case 'rock':
            return '#48180b';
        case 'steel':
            return '#5f756d';
        case 'water':
            return '#1552e2';
        default:
            return '#FFFFFF';
    }
}

const PokemonType = ({ type }) => {
    return (
        <div
            style={{
                backgroundColor: getTypeColor(type),
                borderRadius: '100rem',
                padding: '0.125rem 0.5rem 0.125rem 0.5rem',
                margin: '0rem 0.125rem 0rem 0.125rem',
                fontSize: '12px',
                color: 'white',
            }}
        >
            {type.toUpperCase()}
        </div>
    );
};

export default PokemonType;
