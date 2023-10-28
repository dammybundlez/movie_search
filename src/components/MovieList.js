import React from 'react';

const MovieList = (props) => {
	// const FavouriteComponent = props.favouriteComponent;
	// useEffect(() => {
	// 	fetchData();
	// })
	// const fetchData = () => {
	// axios
	// .get('https://api.themoviedb.org/3/trending/all/day?api_key=40b2ab7a749699b9daf43522ab5cc2a0')
	// 	.then((res) =>
	// 	)
	// }
	return (
		<>	
			{props.trendingMovies.slice(0,18).map((movie, index)=>(
				<div className='moviecard w-52 lg:w-2/10  lg:gap mb-3 lg:mb-4 lg:gap-0.5 '>						
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
	);
};

export default MovieList;
