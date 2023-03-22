import { testimonials } from "../helpers/data";
import { useEffect, useRef, useState } from 'react';

export function Testimonials() {

    const [pages, setPages] = useState(0);
    const slider = useRef<HTMLDivElement>(null);
    const [pagesArray, setPagesArray] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const firstTestimonialDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
        if(firstTestimonialDiv.current) {
            firstTestimonialDiv.current.style.marginLeft = `${-320 * currentPage}px`;
        }
        console.log(currentPage);
    }, [currentPage]);

    function handleResize() {
        if(slider.current) {
            //Largura do container
            let sliderWidth =  slider.current.clientWidth;

            //Quantas cabem
            let slides = sliderWidth / 320;
            
            //Paginas
            let slidesRemaining = testimonials.length - slides;
            let numberOfPages = 1 + slidesRemaining;
            setPages(numberOfPages);
        }
    }

    return(
        <section className="bg-slate-100">
            <div className="m-auto px-3 py-20 max-w-5xl w-full flex flex-col items-center gap-10">

                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-3xl text-slate-900 font-bold">Testimonials</h1>
                    <h3 className="text-lg text-slate-800">What people say about Gym Dev</h3>
                </div>

                <div ref={slider} className="w-[320px] flex justify-start overflow-hidden md:max-lg:w-[640px] lg:w-[960px]">
                    {testimonials.map((item, index) => (
                        <div ref={index === 0 ? firstTestimonialDiv : null} key={index} className="min-w-[320px] px-5 py-3 flex items-center transition-all">
                            <div className="p-3 bg-slate-200 rounded-lg shadow-md">

                                <div className="flex flex-col gap-4">

                                    <div className="flex items-center gap-3">
                                        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                                            <img src={item.avatar} />
                                        </div>{/*Avatar */}

                                        <div className="">
                                            <span className="">{item.name}</span>
                                            <div className="relative">
                                                <div className="text-2xl bg-clip-text bg-yellow-400 text-transparent">★★★★★</div>
                                            </div>
                                        </div>{/*Name and Stars */}
                                    </div>

                                    <div className="flex flex-col gap-1">

                                        <span className="text-slate-900 font-bold">
                                            {item.title}
                                        </span>

                                        <p className="text-slate-600 text-sm">
                                            {item.body}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {pages > 1 && 
                    <div className='flex gap-3'>
                        {pagesArray.map((item, index) => (
                            <div onClick={() => setCurrentPage(item-1)} key={index} className={`h-[15px] border-[2px] border-slate-500/50 rounded-full cursor-pointer transition-all ${currentPage === item-1 ? 'bg-slate-900/50 w-[25px]' : 'bg-transparent w-[15px] '}`}></div>
                        ))}
                    </div>
                }
                

            </div>
        </section>
    );
}