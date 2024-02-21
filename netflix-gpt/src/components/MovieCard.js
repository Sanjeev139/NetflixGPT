import React from 'react'

const MovieCard = ({posterPath}) => {

  return (
    <div className='w-40 pr-4 bg-black'>
      <img alt="poster" src={'https://image.tmdb.org/t/p/w500'+posterPath}></img>
    </div>
  )
}

export default MovieCard
