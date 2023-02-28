import React from 'react';
import { Link } from 'react-router-dom';
import logoPokedexLarge from 'ressources/logo-pokedex.svg';
// import logoPokedexSmall from 'ressources/logo-pokedex-small.svg';

const Logo = () => {
    return (
        <Link to={'/'} style={{ display: 'flex' }}>
            <img src={`${logoPokedexLarge}`} alt="logo" height={50} />
        </Link>
    );
};

export default Logo;
