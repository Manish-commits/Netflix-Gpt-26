import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white py-15'>
    <div className='w-full lg:max-w-[1000px] mx-auto text-[16px] text-[rgba(255,255,255,0.7] flex flex-col gap-5'>
      <div className='flex gap-2'>
        <p>Questions? Call</p>
        <input type='tel' value={'000-800-919-1743'} className='underline'/>
      </div>
      <div className='grid grid-cols-4 '>
        <ul className='underline cursor-pointer '>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul className='underline cursor-pointer'>
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul className='underline cursor-pointer'>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
        <ul className='underline cursor-pointer'>
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer
