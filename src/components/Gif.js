import React from 'react'
import ProgressiveImage from 'react-progressive-image'

const Gif = ({ gif }) => (
  <a href={gif.source ? gif.source : gif.url} key={gif.id}>
    <ProgressiveImage 
      src={gif.images.original.url} 
      placeholder={gif.images.original_still.url}>
      {src => (
        <img
          className='gif' 
          src={src} 
          alt={gif.title}
        />
      )}
    </ProgressiveImage>
  </a>
)
  
  export default Gif