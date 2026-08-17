import React from 'react';

const ReasonCard = ({reason}) => {
  return (
    <div className='w-full h-[340px] rounded-2xl px-4 py-5 relative shadow
        bg-[linear-gradient(149deg,rgb(25,34,71)_0%,rgb(33,14,23)_96.86%)]
    '>
      <h2 className='text-[1.5rem] font-medium'>{reason.title}</h2>
      <p className='text-[1rem] font-normal text-[rgba(255,255,255,0.7)]'>{reason.reason}</p>
      <div className='absolute bottom-2 right-2'>{reason.thumbnail}</div>
    </div>
  )
}

export default ReasonCard
