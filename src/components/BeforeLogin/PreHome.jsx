import React from 'react';
import HeroImageDesktop from '../../assets/PreLogin/Home/large-BG-home.jpg'
import TrendingNow from './TrendingNow';
import ReasonsToJoin from './ReasonsToJoin';

const PreHome = () => {
  return (
    <> 
    <div className='w-full h-screen relative '>
      <div className='w-full z-[-10] absolute inset-0 bg-[linear-gradient(7deg,rgba(0,0,0,0.8500)_10.00%,rgba(0,0,0,0.8465)_17.25%,rgba(0,0,0,0.8361)_24.50%,rgba(0,0,0,0.8187)_31.75%,rgba(0,0,0,0.7944)_39.00%,rgba(0,0,0,0.7632)_46.25%,rgba(0,0,0,0.7250)_53.50%,rgba(0,0,0,0.6868)_60.75%,rgba(0,0,0,0.6556)_68.00%,rgba(0,0,0,0.6312)_75.25%,rgba(0,0,0,0.6139)_82.50%,rgba(0,0,0,0.6035)_89.75%,rgba(0,0,0,0.6000)_97.00%)]' />
      <div className='w-full z-[-20] absolute inset-0 object-cover'>
        <img src={HeroImageDesktop} className='w-full h-full object-cover' />
      </div>

      <div className='w-full absolute left-[50%] top-[70%] translate-x-[-50%] translate-y-[-60%] lg:max-w-[50vw] text-white flex flex-col gap-4 items-center p-4'>
        <h2 className='text-center font-bold text-[3.5rem] leading-[125%]'>Unlimited movies, shows, and more</h2>
        <p className='text-center font-medium text-[1.25rem]'>Starts at ₹149. Cancel at any time.</p>
        <p className='text-center font-normal text-[1rem]'>Ready to watch? Enter your email to create or restart your membership.</p>
        <form className='w-full h-[54px] flex gap-2 '>
          <input 
          type='text' 
          placeholder='Email address'
          className='w-full border-[0.25px] border-gray-500 rounded-sm px-4 py-2' />
          <button type='submit'
            className='w-full max-w-[40%] text-center bg-[var(--primary-button-color)] rounded-sm font-bold text-[1.5rem]'>
            Get Started {'>'}
          </button>
        </form>
      </div>
    </div>
    <div className='bg-black border border-white'>
      Curve containerrrrr
    </div>
    <TrendingNow />
    <ReasonsToJoin />
    </>
  )
}

export default PreHome
