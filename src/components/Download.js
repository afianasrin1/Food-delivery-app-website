import React from 'react';
import download from '../Assets/download-img-banner.png'

const Download = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${download})`, backgroundPosition: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='h-[516px] lg:flex hidden items-center justify-center w-full'>
                <div className='flex flex-col items-center text-center justify-center text-white'>
                    <div>
                        <h1 className='text-[40px] font-bold leading-[57px] '>Download the app now.</h1>
                        <p className='text-[24px] hidden lg:block font-medium py-5 leading-[38px]'>Available on your favorite store. Start your premium experience now</p>
                        <p className='text-[#BDBDBD] font-[500] text-[24px]'>Most calendars are <br />
                            designed for teams. </p>
                    </div>
                    <div className=' flex gap-6 z-50 py-3'>
                        <button className='bg-[#FA4A0C] rounded-[15px] font-semibold py-[16px]  lg:w-[236px] lg:px-0 px-8'>Buy now</button>
                        <button className=' border border-white rounded-[15px] font-semibold py-[16px]  lg:w-[236px] lg:px-0 px-10'>Try for free</button>
                    </div>
                </div>
            </div>
            <div className='h-[516px] lg:hidden flex items-center justify-center w-full bg-[#252B42]'>
                <div className='flex flex-col items-center text-center justify-center text-white'>
                    <div>
                        <h1 className='text-[40px] font-bold leading-[57px] '>Download the app now.</h1>
                        <p className='text-[24px] hidden lg:block font-medium py-5 leading-[38px]'>Available on your favorite store. Start your premium experience now</p>
                        <p className='text-[#BDBDBD] font-[500] text-[24px]'>Most calendars are <br />
                            designed for teams. </p>
                    </div>
                    <div className=' flex gap-6 z-50 py-3'>
                        <button className='bg-[#FA4A0C] rounded-[15px] font-semibold py-[16px]  lg:w-[236px] lg:px-0 px-8'>Buy now</button>
                        <button className=' border border-white rounded-[15px] font-semibold py-[16px]  lg:w-[236px] lg:px-0 px-10'>Try for free</button>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Download;