import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import PopularMovies from './components/PopularMovie';
import UpcomingMovies from './components/UpcomingMovies';
import SocialCards from './components/SocialCards';
import Footer from './components/Footer';
import Discover from './components/Discover';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [discover, setDiscover] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [search, setSearch] = useState(false)


	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4fcc5975`

		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);


	const trendingData = () => {
	axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=40b2ab7a749699b9daf43522ab5cc2a0')
	.then((res) => {
		setTrendingMovies(res.data.results);
	})
	}

	useEffect(() => {
		trendingData(trendingMovies);
	}, [trendingMovies]);


	const discoverData = () => {
		axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=40b2ab7a749699b9daf43522ab5cc2a0')
		.then((res) => {
			setDiscover(res.data.results);
		})
		}
	
		useEffect(() => {
			discoverData(discover);
		}, [discover]);

	const popularData = () => {
		axios.get('https://api.themoviedb.org/3/movie/popular?api_key=40b2ab7a749699b9daf43522ab5cc2a0')
		.then((res) => {
			setPopularMovies(res.data.results);
		})
		}
	
		useEffect(() => {
			popularData(popularMovies);
		}, [popularMovies]);
	
	const upcomingData = () => {
			axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=40b2ab7a749699b9daf43522ab5cc2a0')
			.then((res) => {
				setUpcomingMovies(res.data.results);
			})
			}
		
			useEffect(() => {
				upcomingData(upcomingMovies);
			}, [upcomingMovies]);

	return (
		<div className='container-fluid movie-app'>
			<div className=''>
					<Navbar
					search={search} setSearch = {setSearch}
					 searchValue={searchValue} setSearchValue={setSearchValue} setMovies = {setMovies} movies = {movies}/>
			</div>

			<div className='row flex-col px-4 lg:px-14 md:px-10 lg:mt-16 md:mt-3 items-start'>
				<h4 className='text-black mb-3 text-2xl  flex items-center font-semibold'>Recommended</h4>
				<div className='flex justify-between justify-items-start items-start flex-wrap'>
					<Discover
						discover={discover}
						favouriteComponent={AddFavourites}
						/>
				</div>
			</div>
			
			<div className='row flex-col px-4 lg:px-14 md:px-10  mt-5 items-start'>
				<SocialCards/>
				<h4 className='text-black mb-3 text-2xl  flex items-center font-semibold'>Popular</h4>
				<div className='flex justify-between flex-wrap'>
					<PopularMovies
						popularMovies={popularMovies}
						favouriteComponent={AddFavourites}
						/>
				</div>
			</div>

			<div className='row flex-col px-4 lg:px-14 md:px-10  mt-10 items-start'>
				<h4 className='text-black mb-3 text-2xl  flex items-center font-semibold'>Trending</h4>
				<div className='flex justify-between flex-wrap'>
					<MovieList
						trendingMovies={trendingMovies}
						favouriteComponent={AddFavourites}
						/>
				</div>
			</div>
			<div className='row flex-col px-4 lg:px-14 md:px-10  mt-10 items-start'>
				<h4 className='text-black mb-3 text-2xl  flex items-center font-semibold'>Upcoming</h4>
				<div className='flex justify-between flex-wrap'>
					<UpcomingMovies
						upcomingMovies={upcomingMovies}
						favouriteComponent={AddFavourites}
						/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default App;
