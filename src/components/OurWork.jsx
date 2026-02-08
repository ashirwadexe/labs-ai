import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import WorkCard from './WorkCard'

const OurWork = () => {

    const workData = [
        {
            icon: assets.work_mobile_app,
            title: 'Mobile app marketing',
            desc: 'We turn bold ideas into powerful digital solutions that connect, engage...'
        },
        {
            icon: assets.work_dashboard_management,
            title: 'Dashboard management',
            desc: 'We help you execute your plan and deliver results.'
        },
        {
            icon: assets.work_fitness_app,
            title: 'Fitness app promotion',
            desc: 'We help you create a marketing strategy that drives results.'
        },
    ]

  return (
    <div id='ourwork' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
            {workData.map((work, index)=> (
                <WorkCard key={index} work={work} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default OurWork