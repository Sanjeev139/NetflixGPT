import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='p-36 absolute bg-gradient-to-r from-black text-white aspect-video pt-[20%] px-24'>
      <h1 className='font-bold text-3xl'>{title}</h1>
      <p className='w-1/4 text-lg'>{overview}</p>
      <div>
        <button className='bg-gray-300 text-black p-2 rounded-lg w-36 h-10 hover:bg-opacity-80'>⏯️ Play</button>
        <button className='bg-gray-700 text-white p-2 rounded-lg w-36 h-10 bg-opacity-50 m-2'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
