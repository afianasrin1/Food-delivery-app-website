import React from 'react';
import Login from '../Assets/login-img.png'

const WorkingProcess = () => {
    return (
        <div>
            <div className='w-[884px] bg-[#E4E4E4] hidden lg:px-0 px-4 lg:block h-[1px] mx-auto'>
            </div>
            <h1 className='text-center font-semibold lg:text-[44px] text-[24px] leading-[36px] lg:pt-[72px] lg:pb-0 pb-8 lg:border-b-0 border-b border-gray-300'>How the app works</h1>

            <div className='lg:flex-row flex flex-col-reverse items-center justify-center'>
                <div>
                    <img className='lg:w-[305px] ' src={Login} alt="" />
                </div>
                <div>
                    <h4 className='text-[#FA4A0C] lg:text-start text-center lg:pt-0 pt-8 text-[24px] font-bold'>Create an account</h4>
                    <h1 className='text-[#252B42] font-bold text-[40px] leading-[57px] lg:text-start text-center px-4 lg:px-0 py-5'>Create/login to an existing <br />
                        account to get started</h1>
                    <p className='text-[#737373] text-[24px] leading-[38px] px-4 lg:px-0 lg:text-start text-center'>An account is created with your email <br className='lg:block hidden' />
                        and a desired password</p>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;