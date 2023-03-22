import { plans } from "../helpers/data";

export function Pricing() {

    return(
        <section className="p-3 bg-slate-100">
            <div className="m-auto px-3 py-20 max-w-5xl w-full flex flex-col gap-10">

                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-3xl text-slate-900 font-bold">Membership Plans</h1>
                    <h3 className="text-lg text-slate-800">Choose the Perfect Plan to Achieve Your Fitness Goals</h3>
                </div>

                <main className="flex flex-col items-center gap-10 lg:flex-row">
                    {plans.map((item, index) => (
                        <div key={index} className={`px-4 py-10 max-w-[510px] flex-1 flex flex-col justify-between gap-5 rounded-lg shadow-lg ${item.main ? 'bg-fuchsia-600' : 'bg-slate-200/50'}`}>

                            <div className="flex flex-col gap-2 items-center">
                                <h1 className={`text-5xl text-center font-bold ${item.main ? 'text-slate-100' : 'text-slate-900'}`}>{item.period}</h1>
                                <h2 className={`text-2xl font-bold ${item.main ? 'text-slate-200' : 'text-slate-600'}`}>$ {item.price} / MONTH</h2>
                            </div>

                            <div className={`flex flex-col gap-2 text-base ${item.main ? 'text-slate-100' : 'text-slate-900'}`}>
                                <span className={`py-5 text-center border-b-[2px] ${item.main ? 'border-slate-100/20' : 'border-slate-900/20'}`}>{item.payment}</span>
                                <span className={`py-5 text-center border-b-[2px] ${item.main ? 'border-slate-100/20' : 'border-slate-900/20'}`}>{item.access}</span>
                                <span className={`py-5 text-center border-b-[2px] ${item.main ? 'border-slate-100/20' : 'border-slate-900/20'}`}>{item.classes}</span>
                                <span className={`py-5 text-center border-b-[2px] ${item.main ? 'border-slate-100/20' : 'border-slate-900/20'}`}>{item.discount}</span>
                                <span className={`py-5 text-center ${item.main ? 'border-slate-100/20' : 'border-slate-900/20'}`}>{item.extra}</span>
                            </div>

                            <div className="">
                                <div className={`px-7 py-3 rounded text-center font-bold cursor-pointer transition-all hover:bg-fuchsia-500 ${item.main ? 'bg-slate-100 text-slate-900 hover:bg-slate-200' : 'bg-fuchsia-600 text-slate-100 hover:bg-fuchsia-500'}`}>Join Now</div>
                            </div>

                        </div>
                    ))}
                </main>

            </div>
        </section>
    );
}