import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';

const TopBar = () => {
    return (
        <div className='w-full flex justify-between items-center px-4 h-[70px]'>
            <div className='flex items-center gap-2'>
                <BsChatSquareDots size={20} className='text-primary' />
                <h2>WEEKAWAY</h2>
            </div>
            <div className='flex items-center gap-10'>
                <div className='hidden md:flex'>
                    <AiOutlineClockCircle size={20} className='text-primary' />
                    <span>9am-5pm</span>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='hidden md:flex'>
                        <AiFillPhone size={20} className='text-primary' />
                        <span>1-888-817-1234</span>
                    </div>

                    <button>Get a Free Quote</button>
                </div>

            </div>
        </div>
    )
}

export default TopBar