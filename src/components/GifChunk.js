import React from 'react'
import Gif from './Gif'

const GifChunk = ({ chunk }) => (
  <div className='chunk'>
    {chunk.map(gif => (
      <Gif gif={gif} key={gif.id}/>
    ))}
  </div>
)

export default GifChunk

/* 
The gif chunk component represented one column of gifs in its gif list parent component.
Each chunk renders all of the individual gifs it has received as props.
*/