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