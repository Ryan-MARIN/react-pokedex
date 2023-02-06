import React from "react";
import logoPokedex from "../../ressources/logo-pokedex.svg";

const Logo = ({ size = 5 }) => {
    return <img src={logoPokedex} alt="logo-pokedex" height={size * 10} />;
};

export default Logo;
