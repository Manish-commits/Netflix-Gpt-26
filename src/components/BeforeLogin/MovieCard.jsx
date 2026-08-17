import React from 'react';
import cardFallbackImage from '../../assets/PreLogin/Home/movieBackup.png';

const MovieCard = ({ cardDetails }) => {
  return (
    <div className='w-full p-4 min-w-[220px] max-w-[240px] relative'>
      <img 
      src={cardDetails.thumbnail || cardFallbackImage}
      className='w-full max-w-[180px] h-[252px] rounded-lg'
      alt={cardDetails.title}
       />
        <p 
        className='absolute bottom-0 left-0 font-bold 
        text-[100px] shadow-[rgba(0,0,0,0.5)_0px_0px_24px] border-text'>
        {cardDetails.id}
        </p>
    </div>
  )
}

export default MovieCard
