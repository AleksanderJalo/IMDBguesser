import React from 'react'

const ArtistCard = (props) => {
  return (
      <div className='border-black border-4'><img className="h-[150px] w-[150px]" alt={props.name} src={props.image} />
          <div className='text-2xl border-t-4 border-black bg-white'>{ props.name }</div></div>
  )
}

export default ArtistCard