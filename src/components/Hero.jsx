import React from 'react'

const Hero = () => {
    return (
        <div className='w-full bg-hero-bg h-[90vh] bg-cover'>
            <div className='absolute top-[40%] w-full md:left-[30%] max-w-[400px] lg:max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='text-4xl font-bold'>Find your Special Trip </h1>
                <h2 className='text-3xl italic py-4'>With Weekaway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore est facilis aliquid reiciendis quasi temporibus voluptatem ea excepturi. Inventore?</p>
            </div>

        </div>
    )
}

export default Hero