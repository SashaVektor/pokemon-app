import React from 'react'
import pokebal1 from "../assets/pokeball.png"
import pokebal2 from "../assets/pokeball2.png"

const Background = () => {
    return (
        <div className='background'>
            <img src={pokebal1} alt="pokebal1"
                className='pokebal1'
            />
            <img src={pokebal2} alt="pokebal2"
                className='pokebal1 pokebal2'
            />
            <img src={pokebal1} alt="pokebal1"
                className='pokebal1 pokebal3' />
            <img src={pokebal2} alt="pokebal2"
                className='pokebal1 pokebal4'
            />
            <img src={pokebal1} alt="pokebal1"
                className='pokebal1 pokebal5'
            />
            <img src={pokebal2} alt="pokebal2"
                className='pokebal1 pokebal6'
            />
        </div>
    )
}

export default Background
