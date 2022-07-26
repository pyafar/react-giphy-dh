import React from 'react'
import { useState, useEffect } from 'react'
import { getGiphys } from '../helper/getGiphysApi';
import GiphyItem from './GiphyItem';

const GiphyGrid = ({category}) => {
    const [giphys, setGiphys] = useState([]);
    
    //getGiphys es una función que recibe una categoría y devuelve una promesa
    //para poder utilizarlo, tendria que ponerle un .then, o un async dentro del UseEffect

    useEffect(() => {
        //llamamos al helper getGiphysApi con la categoria que nos llega por props
        getGiphys(category)
        .then(giphys => setGiphys(giphys))
    }, []);

  return (
    <>
    <h3>{category}</h3>
    <hr />
        <section>
                {
                    giphys.map(giphy => {
                    return (
                        <GiphyItem  key = {giphy.id} giphy = {giphy}/>
                        )
                    })
                }
        </section>
    </>
  )
}

export default GiphyGrid