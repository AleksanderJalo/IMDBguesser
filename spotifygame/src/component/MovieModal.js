import React from 'react'

const MovieModal = (props) => {
  return (
      <div className="h-full">
          <img className='scale-[1] h-full' src={`https://image.tmdb.org/t/p/original${props.poster}` } />{props.title}</div>
  )
}

export default MovieModal  