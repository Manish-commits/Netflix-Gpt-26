import React from 'react';
import netflixLogo from '../../assets/PreLogin/Home/Netflix_Logo_PMS.png';

const Header = () => {
  return (
    <div className='w-full lg:max-w-350 2xl:max-w-375 lg:max-h-32 fixed top-0 bg-transparent mt-4'>
      <div className='w-full lg:max-h-32 lg:max-w-250 flex justify-between items-center mx-auto'>
        <img src={netflixLogo}
          className='w-45'
        />

        <div className='text-center text-white p-2 flex gap-2 '>
          <button className='w-full rounded-sm border border-white px-5 py-1 flex items-center justify-center gap-2 font-normal'>
            <img src='https://occ.a.nflxso.net/dnmt/api/v6/jXBzyCe8ipOg2XQkxoKMq9wr74g/AAAAATD_1BX2vy6UEpOpKL9OWaVyT69CoOpmnOYjf95jIlw9PJ_X1uMNkiEgpA3zFbcWMfqfbzzPpjAVTBA6goybPNesMu-K-UQ9-8OAMKFcT6kFno4ynegPu9nd6RclDovX7cYizJJmO4RvHQcyIDmirBkZ9Hueh_s.svg'
              className='w-5 h-5 invert'
             />
          English</button>
          <button className='w-full rounded-sm border-none text-[14px] font-medium px-3 py-1 bg-[rgb(229,9,20)]'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Header
