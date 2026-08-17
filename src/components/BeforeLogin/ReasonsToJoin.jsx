import React from 'react'
import ReasonCard from './ReasonCard'
import SmallComputer from '../../assets/PreLogin/Home/SmallComputer'
import DownArrow from '../../assets/PreLogin/Home/DownArrow'
import Binoculars from '../../assets/PreLogin/Home/Binoculars'
import KidsProfile from '../../assets/PreLogin/Home/KidsProfile'

const ReasonsToJoin = () => {

    const allReasons = [
        {
            title: 'Enjoy on your TV',
            reason: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            thumbnail: <SmallComputer />
        },
        {
            title: 'Download your shows to watch offline',
            reason: 'Save your favourites easily and always have something to watch.',
            thumbnail: <DownArrow />
        },
        {
            title: 'Watch everywhere',
            reason: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            thumbnail: <Binoculars />
        },
        {
            title: 'Create profiles for kids',
            reason: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
            thumbnail: <KidsProfile />
        },
    ]

    return (
        <div className='w-full bg-black text-white py-4'>
        <div className='w-full lg:max-w-[1000px] mx-auto flex flex-col gap-4'> 
            <h1 className='text-[24px] font-semibold'>
                More reasons to join
            </h1>
            <div className='w-full grid grid-cols-4 gap-2.5'>
                {
                    allReasons.map((reasonItem) => {
                        return <ReasonCard reason={reasonItem} />
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default ReasonsToJoin
