import React, { useEffect, useRef, useState } from 'react'

const Navbar = (props) => {
 	const [isopen , setIsOpen] = useState(false)
	const [isopenNav , setIsOpennav] = useState(false)
	 const menuref = useRef()

	 useEffect(() => {
		const checkIfClickedOutside = e => {
		  if (isopen && menuref.current && !menuref.current.contains(e.target)) {
			setIsOpen(false)
		  }
		}
	
		document.addEventListener("mousedown", checkIfClickedOutside)
	
		return () => {
		  document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	  }, [isopen])

  return (
	<>
        <header className='flex bg-slate-800 flex-col text-white py-4 lg:fixed w-full top-0'>
			<div className='header flex gap-5 px-4 md:px-10 lg:px-14 justify-between items-start'>
				<div className='logoinput flex items-start gap-10'>
					<div className='flex gap-3' >
						<div onClick={()=> setIsOpennav(!isopenNav)}>
							{isopenNav ?
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" className='fill-white text-2xl' viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
								:
								<span><svg xmlns="http://www.w3.org/2000/svg" height="1em" className='fill-white text-2xl' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></span>
							}
						</div>
						<h1 className='logo font-bold text-xl'>WatchMate</h1>
					</div>
				<div className='w-2/3'>
						<input
							type='text'
							className='py-1 px-16 hidden w-full lg:flex text-black md:flex outline-0'
							value={props.value}
							onClick={() => setIsOpen((oldState) => !oldState)}
							onChange={(event) => props.setSearchValue(event.target.value)}
							placeholder='Type to search...'
						/>		
						<div className={`z-10 w-80 absolute lg:block hidden md:block sm:block ml-0.5 text-black ${isopen ? '' : 'top-[-490px]'} `} ref={menuref}>
						{ isopen && props.movies.slice(0,5).map((movie) => (
							<div className={`searchcard  px-3 flex gap-5 overflow-ellipsis truncate whitespace-nowrap  py-1.5 z-10  bg-gray-300 items-center border-b-slate-700` }>				
								<img className='w-12 object-contain' src={`${movie.Poster}`} alt='movie'/>	
								<div className=' truncate   text-sm font-medium mb-1'>
									{movie.Title}	
								<div className='flex gap-2 items-center'>
									<span className='text-xs text-center font-normal'>{movie.Year} </span>
									<span className='font-bold text-xl text-center pb-2.5'>.</span>
									<span className='text-xs text-center font-normal'>{movie.Type} </span>
								</div>
								</div>	
							</div>
						))}
				</div>		
				</div>
				</div>
				<div className=' h-full'>
					<input className='h-full bg-green-500 px-5 py-1'
					value="Login"
					type='button'
					/>	
				</div>
			</div>
			<div className='w-full px-4 flex flex-col lg:hidden md:hidden justify-center items-center pt-4'>
						<input
							type='text'
							className='py-1 px-6 w-full mx-6  lg:flex text-black md:flex outline-0'
							value={props.value}
							onClick={() => setIsOpen((oldState) => !oldState)}
							onChange={(event) => props.setSearchValue(event.target.value)}
							placeholder='Type to search...'
						/>		
						<div className={`z-10 w-full absolute top-28  lg:block md:block sm:block ml-0.5 text-black ${isopen ? '' : 'top-[-490px]'} `} ref={menuref}>
						{ isopen && props.movies.slice(0,5).map((movie) => (
							<div className={`searchcard  px-3 flex gap-5 overflow-ellipsis truncate whitespace-nowrap  py-1.5 z-10  bg-gray-300 items-center border-b-slate-700` }>				
								<img className='w-12 object-contain' src={`${movie.Poster}`} alt='movie'/>	
								<div className=' truncate   text-sm font-medium mb-1'>
									{movie.Title}	
								<div className='flex gap-2 items-center'>
									<span className='text-xs text-center font-normal'>{movie.Year} </span>
									<span className='font-bold text-xl text-center pb-2.5'>.</span>
									<span className='text-xs text-center font-normal'>{movie.Type} </span>
								</div>
								</div>	
							</div>
						))}
				</div>		
				</div>
		</header>
		
		</>
  )
}

export default Navbar