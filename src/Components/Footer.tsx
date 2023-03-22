import logo from '../assets/images/logo3.png';

export function Footer() {

    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <footer className="bg-black">
            <div className="m-auto px-3 py-6 max-w-5xl w-full text-slate-100 flex flex-col gap-5 lg:flex-row">
                
                <div className='flex-1 flex flex-row items-center justify-between lg:flex-col lg:items-start'>
                    <div className="w-[60px] h-[60px]">
                        <img className='w-full' src={logo} />
                    </div>

                    <div className='flex gap-5'>

                        <a className='group' href='https://www.linkedin.com/in/danilo-melo-788337215/'>
                            <svg className='transition-all group-hover:fill-slate-400' width="30" height="30" fill="#828282" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.94 5.001a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.481H3v12.52h4V8.481Zm6.32 0H9.34v12.52h3.94v-6.57c0-3.66 4.77-4 4.77 0v6.57H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"></path>
                            </svg>
                        </a>

                        <a className='group' href='https://www.instagram.com/dimelodev/'>
                            <svg className='transition-all group-hover:fill-slate-400' width="30" height="30" fill="#828282" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703 2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.91 2.91 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4Zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Z"></path>
                            </svg>
                        </a>

                        <a className='group' href='https://github.com/diMelo-dev'>
                            <svg className='transition-all group-hover:fill-slate-400' width="30" height="30" fill="#828282" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className='grow-[2] flex flex-col gap-4 justify-around sm:flex-row'>

                    <ul className='flex flex-col gap-3'>
                        <li className='transition-all hover:text-slate-300'><a className='' href=''>Our Locations</a></li>
                        <li className='transition-all hover:text-slate-300'><a className='' href=''>Contact Us</a></li>
                        <li className='transition-all hover:text-slate-300'><a className='' href=''>Follow us</a></li>
                    </ul>

                    <div className='flex gap-10 justify-between'>
                        <div className='flex flex-col gap-3 text-sm text-slate-300'>
                            <span className=''>Street of Flowers, 123</span>
                            <span className=''>Jardim das Árvores Neighborhood</span>
                            <span className=''>City of Sun, São Paulo State</span>
                            <span className=''>ZIP: 12345-678</span>
                            <span className=''>Brazil</span>
                        </div>

                        <div onClick={scrollToTop} className='border-2 border-[#828282] w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer transition-all group hover:border-slate-200'>
                            <svg className='transition-all group-hover:stroke-slate-200' width="30" height="30" fill="none" stroke="#828282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3v18"></path>
                                <path d="m6 9 6-6 6 6"></path>
                            </svg>
                        </div>
                    </div>

                </div>
                

            </div>
        </footer>
        
    );
}