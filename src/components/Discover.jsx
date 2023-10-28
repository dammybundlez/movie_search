import React from 'react'

const Discover = (props) => {
  return (
    <>
        {props.discover.slice(0,6).map((movie, index)=>(
            <div className='moviecard w-52 sm:w-44 lg:w-2/10 mb-3 lg:mb-4 lg:gap-0.5 '>				
                    <img className='' src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie'/>	
                        <div className='overflow-ellipsis truncate whitespace-nowrap text-sm font-semibold mb-1'>
                            {movie.original_name} {movie.title}	
                        </div>	
                        <div className='flex gap-2 items-center'>
                            <span className='bg-yellow-400 rounded text-xs font-bold p-1'>{movie.vote_average.toFixed(1)}</span>
                            <span className='text-xs text-center font-normal'>{movie.release_date} {movie.first_air_date} </span>
                        </div>
                </div>
            ))}
    </>
  )
}

export default Discover