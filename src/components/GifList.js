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

/* 
The gif list component (used in favorites, search, and trending) is primarily
responsible for dividing all of the gifs it has received as props into chunks.
This is the key to the mosaic box-packing styles; each chunk is one column in the list.
I added Math.ceil on the length parameter to ensure that any fractions are rounded to whole
integers. It would be nice if the number of columns was relative to the viewport width,
but for now, it's either 4 columns or 1 column (below 750px).
*/