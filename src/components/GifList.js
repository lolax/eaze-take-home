import React from 'react'
import GifChunk from './GifChunk'

const createChunk = (arr, size) => (
  Array.from(
    { length: Math.ceil(arr.length / size) }, 
    (v, i) => arr.slice(i * size, i * size + size)
  )
) 

const GifList = ({ gifs }) => (
  <div className='gif-list'>
    {createChunk(gifs, Math.ceil(gifs.length / 4)).map((chunk, i) => (
      <GifChunk chunk={chunk} key={i} />
    ))}
  </div>
);

export default GifList;