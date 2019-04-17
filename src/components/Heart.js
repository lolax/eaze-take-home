import React from 'react';

const HeartButton = ({liked, favGif}) => (
  <div className='heart-container'>
    <svg
      onClick={favGif}
      className='heart-button'
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      stroke='rgb(18, 18, 18)'
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      cursor='pointer'
    >
    <path 
      fill={liked ? '#ff3144' : 'white'}
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </div>
)

export default HeartButton;

/* 
The heart button is an svg that signals to Gif to call the method favGif
when it is clicked. It changes fill color based on whether the gif is currently
liked or not.
*/