import { Header } from "./Header";
import bannerVideo from '../assets/videos/banner1.mp4';


export function Banner() {

    return(
        <div className="relative h-screen bg-cover bg-top overflow-hidden flex flex-col">
            <Header />

            <video className="absolute top-0 -z-10 w-full h-full object-cover" autoPlay={true} loop={true} muted={true}>
                <source src={bannerVideo} type='video/mp4' />
                Your browser does no support the video tag
            </video>

            <div className="flex-1 flex flex-col items-center justify-center gap-5">
                
                <div className="p-4 flex flex-col gap-4 text-slate-100 text-center">

                    <h1 className="text-5xl font-bold">
                        Become your best version with us.
                    </h1>

                    <h2 className="text-lg font-bold">Be part of a community that values your personal progress</h2>

                </div>{/* Banner Headlines */}

                <div className='px-7 py-3 rounded bg-fuchsia-600 text-slate-100 font-bold cursor-pointer transition-all hover:bg-fuchsia-500'>START TODAY</div>

            </div>
        </div>
    );
}