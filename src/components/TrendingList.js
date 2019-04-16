import React from 'react';

const TrendingList = ({ trending }) => (
  <div className="trending">
    {trending.map(gif => (
      <img 
        className='trending-gif'
        key={gif.id} 
        src={gif.images.original.url} 
        alt={gif.title}
      />
    ))}
  </div>
);

export default TrendingList;