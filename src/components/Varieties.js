import React from 'react';
import delicious from '../Assets/delicious-img.png'
const Varieties = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:px-0 px-4  justify-center items-center'>
            <div>
                <h4 className='text-[#FA4A0C] font-bold lg:text-start text-center'>Explore varieties</h4>
                <h1 className='text-[#252B42] font-bold text-[40px] leading-[57px] lg:text-start text-center py-5'>Shop for you <br className='lg:hidden' /> favorites <br className='hidden lg:block'/>
                    meal <br className='lg:hidden' /> as e dey hot.</h1>
                <p className='text-[#737373] text-[24px] leading-[38px] lg:text-start text-center'>Shop for your favorite meals or drinks <br className='lg:block hidden' />
                    and enjoy while doing it.</p>
            </div>
            <div>
                <img className='lg:w-[305px]' src={delicious} alt="" />
            </div>
        </div>
    );
};

export default Varieties;