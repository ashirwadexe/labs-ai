import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-2 sm:px-10 lg:px-20 xl:px-40'>

        {/* footer top */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

            {/* left column */}
            <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt="" />
                <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>

                <ul className='flex gap-8'>
                    <li><a className='hover:text-primary' href="#hero">Home</a></li>
                    <li><a className='hover:text-primary' href="#services">Services</a></li>
                    <li><a className='hover:text-primary' href="#ourwork">Our Work</a></li>
                    <li><a className='hover:text-primary' href="#contactus">Contact Us</a></li>
                </ul>
            </div>

            {/* right column */}
            <div className='text-gray-600 dark:text-gray-400'>
                <h3>Subscribe to our newslatter</h3>
                <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>

                <div className='flex gap-2 text-sm'>
                    <input 
                        type="email"
                        placeholder='Enter your email'
                        className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border dark:border-gray-300 dark:border-gray-500'
                    />
                    <button className='bg-primary text-white rounded px-6'>Subscribe</button>
                </div>
            </div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6' />

        {/* footer bottom */}
        <div className='pb-6 text-sm text-gray-500 flex justify-between sm:justify-betweengap-4 flex-wrap'>
            <p>Made with 💗 by Ashirwad</p>
            <div className='flex items-center justify-between gap-4'>
                <a href="https://ashirwadexe.netlify.app/" target='_blank'><img src={assets.facebook_icon} alt="" /></a>
                <a href="https://x.com/ashirwadexe" target='_blank'><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://www.instagram.com/ashirwad_bappy/" target='_blank'><img src={assets.instagram_icon} alt="" /></a>
                <a href="https://www.linkedin.com/in/ashirwad-chaurasia-6b3935258/" target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>

    </div>
  )
}

export default Footer