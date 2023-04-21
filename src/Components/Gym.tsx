import gym1 from '../assets/images/gym1.jpg';
import gym2 from '../assets/images/gym2.jpg';

export function Gym() {

    return(
        <section id='ourGym' className="bg-slate-900">
            <div className=" flex lg:h-screen">

                <div className='hidden w-1/2 lg:block'>
                    <img className='w-full h-full' src={gym1} />
                </div>

                <div className='p-5 w-full flex flex-col items-center justify-center gap-5 lg:w-1/2'>
                    
                    <div className='flex-1 flex items-center'>
                        <div className='w-[120px] h-[120px] flex items-center justify-center bg-slate-800 rounded-full '>
                            <svg width="70" height="70" fill="none" stroke="#f2f2f2" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.502 21.116a.39.39 0 0 0 .396.384H21.1a.39.39 0 0 0 .396-.384v-.46c.009-.138.027-.828-.428-1.592a3.745 3.745 0 0 0-1.238-1.235c-.646-.41-1.469-.707-2.464-.886-.007 0-.745-.099-1.5-.292-1.317-.336-1.432-.633-1.432-.636a.378.378 0 0 0-.034-.084c-.01-.056-.037-.265.014-.824.129-1.421.891-2.261 1.504-2.936.193-.213.376-.414.516-.611a3.856 3.856 0 0 0 .665-1.878 1 1 0 0 0-.044-.314c-.06-.185-.171-.3-.253-.385a1.434 1.434 0 0 1-.056-.06c-.006-.007-.023-.026-.008-.121.054-.353.086-.648.102-.93.027-.5.049-1.25-.08-1.978a3 3 0 0 0-.086-.413 3.244 3.244 0 0 0-.66-1.285c-.053-.057-1.327-1.4-5.026-1.675a12.04 12.04 0 0 0-1.514.008c-.12.006-.284.014-.438.054-.382.099-.484.34-.51.476-.045.225.033.4.085.515.007.016.016.037 0 .091-.086.133-.22.253-.358.366-.04.034-.968.834-1.019 1.878-.137.795-.127 2.033.036 2.888.01.047.023.117 0 .165-.174.156-.372.334-.372.74.002.04.058 1.007.665 1.857.14.198.322.398.515.611.613.675 1.376 1.515 1.505 2.937.05.56.024.768.013.824a.378.378 0 0 0-.033.084c0 .003-.115.3-1.425.635-.756.193-1.5.292-1.522.295-.967.164-1.785.453-2.43.86-.533.337-.95.754-1.24 1.239-.464.775-.452 1.48-.445 1.61v.462Z"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <div className='flex-1 flex flex-col items-center justify-center gap-5 text-center'>
                        <h3 className='text-xl text-slate-100'>Experienced professionals in the field of physical activity</h3>

                        <h4 className='text-lg text-slate-300'>Meet our team of highly qualified professionals</h4>
                    </div>
                    
                    <div className='flex-1 flex items-center'>
                        <div className='px-7 py-3 rounded bg-fuchsia-600 text-slate-100 font-bold cursor-pointer transition-all hover:bg-fuchsia-500'>
                            Meet all instructors
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className="flex lg:h-screen">

                <div className='p-5 w-full flex flex-col items-center justify-center gap-5 lg:w-1/2'>
                    
                    <div className='flex-1 flex items-center'>
                        <div className='w-[120px] h-[120px] flex items-center justify-center bg-slate-800 rounded-full '>
                            <svg width="70" height="70" fill="none" stroke="#f2f2f2" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 2h9L13 9h7.5l-12 13 2.5-9.5H4L9.5 2Z"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <div className='flex-1 flex flex-col items-center justify-center gap-5 text-center'>
                        <h3 className='text-xl text-slate-100'>High-tech equipment and facilities</h3>

                        <h4 className='text-lg text-slate-300'>Train with the best equipment and enjoy our state-of-the-art facilities</h4>
                    </div>
                    
                    <div className='flex-1 flex items-center'>
                        <div className='px-7 py-3 rounded bg-fuchsia-600 text-slate-100 font-bold cursor-pointer transition-all hover:bg-fuchsia-500'>
                            View Facilities
                        </div>
                    </div>
                    
                </div>

                <div className='hidden w-1/2 h-full lg:block'>
                    <img className='w-full h-full' src={gym2} />
                </div>

            </div>
        </section>
        
    );
}