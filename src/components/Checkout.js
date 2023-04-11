import React from 'react';
import checkout from '../Assets/checkout-img.png'

const Checkout = () => {
    return (
        <div>
            <div className='lg:flex-row lg:px-0 px-4 flex flex-col-reverse items-center justify-center'>
                <div>
                    <img className='lg:w-[305px]' src={checkout} alt="" />
                </div>
                <div>
                    <h4 className='text-[#FA4A0C] lg:text-start text-center font-bold'>Checkout</h4>
                    <h1 className='text-[#252B42] font-bold text-[40px] leading-[57px] lg:text-start text-center py-5'>When you <br className='lg:hidden' /> done check <br className='lg:hidden' /> out <br className='hidden lg:block' />
                        and get it delivered.</h1>
                    <p className='text-[#737373] text-[24px] leading-[38px] lg:text-start text-center'>When you done check out and get it <br className='lg:block hidden' />
                        delivered with ease.</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;