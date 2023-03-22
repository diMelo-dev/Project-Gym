import { useState } from "react";


export function Contact() {

    const [name, setName] = useState('');
    const [subject, setSubject]= useState('');
    const [message, setMessage] = useState('');

    const [nameFocus, setNameFocus] = useState(false);
    const [subjectFocus, setSubjectFocus] = useState(false);
    const [messageFocus, setMessageFocus] = useState(false);

    const [errorName, setErrorName] = useState(false);
    const [errorSubject, setErrorSubject] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setErrorName(false);
        setErrorSubject(false);
        setErrorMessage(false);

        if(name === ''|| subject === '' || message === '' ){
            e.preventDefault();
        }
        if(name === '') {
            setErrorName(true);
        }
        if(subject === '') {
            setErrorSubject(true);
        }
        if(message === '') {
            setErrorMessage(true);
        }
    }

    return(
        <section className="bg-slate-900">
            <div className="m-auto px-3 py-20 max-w-5xl w-full text-slate-100 flex flex-col gap-4 lg:flex-row">
                
                <div className="flex-1 flex flex-col items-center gap-4">

                    <h3 className="text-5xl font-bold">Contact us</h3>

                    <div className="flex-1">

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <svg width="20" height="20" fill="none" stroke="#f2f2f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 9v10.91c0 .602-.448 1.09-1 1.09H3c-.552 0-1-.488-1-1.09V9l10 6.5L22 9Z"></path>
                                    <path d="M2 8.892 12 2l10 6.892"></path>
                                </svg>

                                <a className='text-slate-100 transition-all hover:text-slate-300' href="mailto:danilo.osouza.melo@gmail.com">gymDev@gmail.com</a>
                            </div>

                            <div className="flex items-center gap-4">
                                <svg width="20" height="20" fill="#f2f2f2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.94 5.001a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.481H3v12.52h4V8.481Zm6.32 0H9.34v12.52h3.94v-6.57c0-3.66 4.77-4 4.77 0v6.57H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"></path>
                                </svg>
                                <a className='text-slate-100 transition-all hover:text-slate-300' href='https://www.linkedin.com/in/danilo-melo-788337215/'>/gymDev</a>
                            </div>
                        </div>

                        <div className=""></div>

                    </div>

                </div>

                <div className="grow-[2] flex-1">
                    <form onSubmit={(e) => handleSubmit(e)} action={`mailto:danilo.osouza.melo@gmail.com?subject=${subject}`} method='POST' encType="text/plain" autoComplete='off' className="flex flex-col gap-4">
                        <div className="p-5 relative">
                            <label className={`absolute transition-all ${nameFocus ? 'top-0 text-sm' : 'top-5'} ${errorName ? 'text-red-400' : 'text-slate-300'}`} htmlFor='input_name'>
                                Name
                                <span className="">*</span>
                            </label>
                            <input 
                                onBlur={() => name === '' ? setNameFocus(false) : ''} 
                                onFocus={() => setNameFocus(true)} 
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`pt-0 pb-3 w-full bg-transparent outline-none border-b-[1px] ${errorName ? 'border-red-400' : 'border-slate-100'}`}
                                type='text' 
                                id='input_name' 
                            />
                        </div>

                        <div className="p-5 relative">
                            <label className={`absolute transition-all ${subjectFocus ? 'top-0 text-sm' : 'top-5'} ${errorSubject ? 'text-red-400' : 'text-slate-300'}`} htmlFor='input_subject'>
                                Subject
                                <span className="">*</span>
                            </label>
                            <input 
                                onBlur={() => subject === '' ? setSubjectFocus(false) : ''} 
                                onFocus={() => setSubjectFocus(true)} 
                                name='subject'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className={`pt-0 pb-3 w-full bg-transparent outline-none border-b-[1px]  ${errorSubject ? 'border-red-400' : 'border-slate-100'}`} 
                                type='text' 
                                id='input_subject' 
                            />
                        </div>

                        <div className="p-5 relative">
                            <label className={`absolute transition-all ${messageFocus ? 'top-0 text-sm' : 'top-5'} ${errorMessage ? 'text-red-400' : 'text-slate-300'}`} htmlFor='input_message'>
                                Message
                                <span className="">*</span>
                            </label>
                            <textarea 
                                onBlur={() => message === '' ? setMessageFocus(false) : ''} 
                                onFocus={() => setMessageFocus(true)} 
                                name='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={`pt-0 pb-3 w-full h-[150px] bg-transparent outline-none border-b-[1px] resize-none ${errorMessage ? 'border-red-400' : 'border-slate-100'}`} 
                                id='input_message' 
                            />
                        </div>



                        <button className="px-7 py-3 rounded bg-fuchsia-600 text-slate-100 font-bold cursor-pointer transition-all hover:bg-fuchsia-500">Submit</button>

                    </form>
                </div>

            </div>
        </section>
        
    );
}