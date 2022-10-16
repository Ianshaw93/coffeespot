import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; 
import coffeeImage from '../assets/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg'

const Home = () => {
  // const coffeeImageUrl = 'fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg'
  return (
    // <div name='home' className='w-full h-screen'>
    <div id={'home'} className='hero min-h-screen' style={{ backgroundImage: `url(${coffeeImage})` }}>
        {/* Container */}
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            {/* <p className='text-[#40AAE8]'>Hey there, my name is</p> */}
            <h1 className='text-4xl sm:text-7xl font-bold'>Coffee Stop</h1>
            {/* change font colour to lighter */}
            <h2 className='text-4xl sm:text-7xl font-bold text-[#CBD0D3]'>Fresh Coffee and Cake</h2>
          <div>
            <button onClick={() => window.location.replace("/personalWebsite/#work")} className='text-black hover:text-[#CBD0D3] border-2 px-6 my-2 flex items-center hover:bg-[#438EBA]'>
              View Menu  <HiArrowNarrowRight />
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home