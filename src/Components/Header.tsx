import { useState } from 'react';
import logo from '../assets/images/logo3.png';

export function Header() {

    const [showMenuMobile, setShowMenuMobile] = useState(false);


    function handleMenuMobile() {
        if(showMenuMobile) {
            setShowMenuMobile(false);
        } else {
            setShowMenuMobile(true);
        }
    }

    return(
        <header className=" px-3 py-6 max-w-5xl w-full relative flex items-center justify-between gap-3 lg:m-auto">
            
            <div className=" w-20 z-10">
                <img className="w-full" src={logo} />
            </div>
            
            <div className="flex items-center gap-8 font-bold lg:gap-20">
                
                {!showMenuMobile && 
                    <ul className='w-full h-full text-slate-300 hidden items-center gap-10 lg:flex'>
                        <li className='p-2 cursor-pointer transition-all hover:text-slate-100'>
                            <a className=''>HOME</a>
                        </li>

                        <li className='p-2relative cursor-pointer transition-all hover:text-slate-100 group'>
                            <a className='flex items-center gap-2 group'>
                                WE ARE GYM DEV

                                <svg className=' stroke-slate-300 transition-all group-hover:stroke-slate-100' width="25" height="25" fill="none" stroke="#fafafa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m18.5 9-6 6-6-6"></path>
                                </svg>
                            </a>

                            <ul className='h-0 overflow-y-hidden absolute top-full bg-slate-100 flex flex-col items-center justify-center gap-3 text-base transition-all duration-500 text-slate-900 group-hover:h-[200px] group-hover:p-4'>

                                <li className='p-2 border-2 border-slate-900 rounded w-full text-center transition-all duration-300 hover:bg-fuchsia-600 hover:text-slate-100'>
                                    <a className=''>ACTIVITIES</a>
                                </li>

                                <li className='p-2 border-2 border-slate-900 rounded w-full text-center transition-all duration-300 hover:bg-fuchsia-600 hover:text-slate-100'>
                                    <a className=''>TESTIMONIALS</a>
                                </li>

                                <li className='p-2 border-2 border-slate-900 rounded w-full text-center transition-all duration-300 hover:bg-fuchsia-600 hover:text-slate-100'>
                                    <a className=''>OUR GYM</a>
                                </li>

                            </ul>

                        </li>

                        <li className='p-2 cursor-pointer transition-all hover:text-slate-100'>
                            <a className=''>PRICING</a>
                        </li>

                        <li className='p-2 cursor-pointer transition-all hover:text-slate-100'>
                            <a className=''>CONTACT</a>
                        </li>
                    </ul>
                }

                 
                <ul className={`absolute top-0 left-0 bg-fuchsia-600 w-screen overflow-hidden text-slate-300 flex flex-col items-start gap-10 transition-all ${showMenuMobile ? 'pt-[130px] h-screen' : 'h-0'}`}>
                    <li className='p-2 text-3xl cursor-pointer transition-all hover:text-slate-100 lg:text-base'>
                        <a className=''>HOME</a>
                    </li>

                    <li className='p-2 text-3xl relative cursor-pointer transition-all hover:text-slate-100 group lg:text-base'>
                        <a className='flex items-center gap-2 group'>
                            WE ARE GYM DEV

                            <svg className=' stroke-slate-300 transition-all group-hover:stroke-slate-100' width="25" height="25" fill="none" stroke="#fafafa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m18.5 9-6 6-6-6"></path>
                            </svg>
                        </a>

                        <ul className='h-0 overflow-y-hidden absolute top-full bg-slate-100 flex flex-col items-center justify-center gap-3 text-base transition-all duration-500 text-slate-900 group-hover:h-[200px] group-hover:p-4'>

                            <li className='p-2 border-2 border-slate-900 rounded w-full text-center transition-all duration-300 hover:bg-fuchsia-600 hover:text-slate-100'>
                                <a className=''>ACTIVITIES</a>
                            </li>

                            <li className='p-2 border-2 border-slate-900 rounded w-full text-center transition-all duration-300 hover:bg-fuchsia-600 hover:text-slate-100'>
                                <a className=''>TESTIMONIALS</a>
                            </li>

                            <li className='p-2 border-2 border-slate-900 rounded w-full text-center transition-all duration-300 hover:bg-fuchsia-600 hover:text-slate-100'>
                                <a className=''>OUR GYM</a>
                            </li>

                        </ul>

                    </li>

                    <li className='p-2 text-3xl cursor-pointer transition-all hover:text-slate-100 lg:text-base'>
                        <a className=''>PRICING</a>
                    </li>

                    <li className='p-2 text-3xl cursor-pointer transition-all hover:text-slate-100 lg:text-base'>
                        <a className=''>CONTACT</a>
                    </li>
                </ul>
                

                <div className='px-7 py-3 rounded hidden bg-fuchsia-600 text-slate-100 whitespace-nowrap cursor-pointer transition-all hover:bg-fuchsia-500 min-[400px]:block'>JOIN NOW</div>
            
                <div className={`z-10 cursor-pointer lg:hidden`} onClick={handleMenuMobile}>
                    <svg className={`${showMenuMobile ? ' stroke-slate-100' : ''}`} width="30" height="30" fill="none" stroke="#828282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.975 5.975h16"></path>
                        <path d="M3.975 11.975h16"></path>
                        <path d="M3.975 17.975h16"></path>
                    </svg>
                </div>
            
            </div>

        </header>
    );
}