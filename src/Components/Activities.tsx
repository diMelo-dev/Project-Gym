import { useEffect, useRef, useState } from 'react';
import { activities } from '../helpers/data';
import activitie1 from '../assets/images/activities1.png';
import activitie2 from '../assets/images/activities2.png';
import activitie3 from '../assets/images/activities3.png';

export function Activities() {

    const [activitie, setActivitie] = useState<number>(0);
    const [showActivitie, setShowActivitie] = useState(false);

    const [pages, setPages] = useState(0);
    const slider = useRef<HTMLDivElement>(null);
    const [pagesArray, setPagesArray] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const firstActivitieDiv = useRef<HTMLDivElement>(null);


    useEffect(() => {
        //Pages = quantas atividades tem / quantas cabem (arredonda para cima)
        //Quantas cabem = ( largura do container - 2*12 ) / 320
        
        
        //Largura do container = muda de acordo com a largura da pagina
        //console.log(slider.current?.clientWidth)

        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let newPagesArray = [];
        for(let i = 1; i <= pages; i++) {
            newPagesArray.push(i);
        }
        setPagesArray(newPagesArray);
    }, [pages]);

    useEffect(() => {
        if(firstActivitieDiv.current) {
            firstActivitieDiv.current.style.marginLeft = `${-320 * currentPage}px`;
        }
    }, [currentPage]);

    function handleActivitieClick(index: number) {
        setActivitie(index);
        setShowActivitie(true);
    }

    function handleResize() {
        if(slider.current) {
            //Largura do container
            let sliderWidth =  slider.current.clientWidth;

            //Quantas cabem
            let slides = (sliderWidth - (2*12)) / 320;
            
            //Paginas
            let slidesRemaining = activities.length - slides;
            //let numberOfPages = Math.ceil(activities.length / slides);
            let numberOfPages = 1 + slidesRemaining;
            setPages(numberOfPages);
        }
    }


    return(
        <section id='activities' className="bg-slate-900">
            <div className="m-auto px-3 py-20 max-w-5xl w-full flex flex-col items-center gap-16">
                
                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-3xl text-slate-100 font-bold">Activities</h1>
                    <h3 className="text-lg text-slate-300">Discover new ways to exercise in our gym.</h3>
                </div>

                <div ref={slider} className='w-[344px] py-8 px-3 flex overflow-hidden md:max-lg:w-[664px] lg:w-[984px]'>

                    <div ref={firstActivitieDiv} className="min-w-[320px] flex flex-col items-center gap-3 transition-all">

                        <div className='w-[280px] h-[280px] bg-slate-900 rounded-full flex items-center justify-center transition-all hover:scale-125'>
                            <div onClick={() => handleActivitieClick(0)} className="w-[95%] bg-slate-800 rounded-full overflow-hidden transition-all cursor-pointer hover:bg-[#7920c7]">
                                <img className="" src={activitie1} />
                            </div>
                        </div>

                        <div className='h-[100px] flex flex-col items-center gap-3'>
                            <div className='flex-1 w-2 bg-slate-100 border-4 rounded'></div>
                            <span className='text-slate-100 text-lg'>Body Pump</span>
                        </div>

                    </div>{/* ACTIVITIE */}

                    <div className="min-w-[320px] flex flex-col items-center gap-3">

                        <div className='w-[280px] h-[280px] bg-slate-900 rounded-full flex items-center justify-center transition-all hover:scale-125'>
                            <div onClick={() => handleActivitieClick(1)} className="w-[95%] bg-slate-800 rounded-full overflow-hidden transition-all cursor-pointer hover:bg-[#004369]">
                                <img className="" src={activitie2} />
                            </div>
                        </div>

                        <div className='h-[100px] flex flex-col items-center gap-3'>
                            <div className='flex-1 w-2 bg-slate-100 border-4 rounded'></div>
                            <span className='text-slate-100 text-lg'>Boxing</span>
                        </div>

                    </div>{/* ACTIVITIE */}

                    <div className="min-w-[320px] flex flex-col items-center gap-3">

                        <div className='w-[280px] h-[280px] bg-slate-900 rounded-full flex items-center justify-center transition-all hover:scale-125'>
                            <div onClick={() => handleActivitieClick(2)}  className="w-[95%] bg-slate-800 rounded-full overflow-hidden transition-all cursor-pointer hover:bg-[#f05345]">
                                <img className="" src={activitie3} />
                            </div>
                        </div>

                        <div className='h-[100px] flex flex-col items-center gap-3'>
                            <div className='flex-1 w-2 bg-slate-100 border-4 rounded'></div>
                            <span className='text-slate-100 text-lg'>Zumba</span>
                        </div>

                    </div>{/* ACTIVITIE */}

                </div>

                {pages > 1 &&
                    <div className='flex gap-3'>
                        {pagesArray.map((item, index) => (
                            <div onClick={() => setCurrentPage(item-1)} key={index} className={`h-[15px] border-[2px] border-slate-300/50 rounded-full cursor-pointer transition-all ${currentPage === item-1 ? 'bg-slate-300/50 w-[25px]' : 'bg-transparent w-[15px] '}`}></div>
                        ))}
                    </div>
                }

                {activitie !== undefined &&
                    <div className={`max-w-[500px] w-full m-auto flex flex-col gap-4 text-center overflow-hidden transition-all duration-500 ${showActivitie  ? 'h-[200px]' : 'h-0'}`}>
                        <h3 className='text-slate-100 text-2xl font-bold'>{activities[activitie].title}</h3>
                        <p className='text-slate-300 text-lg'>{activities[activitie].body}</p>
                    </div>
                }
                

            </div>
        </section>
    );
}