import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='flex flex-col justify-center px-4 items-center py-10 h-2/3'>
            <div className='flex gap-4 pb-4 items-center'>
                <div>
                    <h3>Terms of service</h3>
                </div>
                -
                <div>
                    <h3>Contacy</h3>
                </div>
                -
                <div>
                    <h3>Socials</h3>
                </div>
                -
                <div>
                    <h3>About</h3>
                </div>
            </div>
            <div>
            <h1 className='logo font-bold text-xl'>WatchMate</h1>
            </div>
        </div> 
    </>
  )
}

export default Footer