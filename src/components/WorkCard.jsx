import React from 'react'

const WorkCard = ({work, index}) => {
    
  return (
    <div className='flex flex-col hover:scale-103 transition-all duration-500'>
        <img className='w-full rounded-xl' src={work.icon} alt="" />
        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
        <p className='text-sm opacity-60 w-5/6'>{work.desc}</p>
    </div>
  )
}

export default WorkCard