import { PlusCircleIcon, CheckIcon } from '@heroicons/react/solid';
import { CalendarIcon, TrashIcon, } from '@heroicons/react/outline';


const Main = () => {
    return (
        <section id="main" className="grow font-nunito">
            {/* header */}
            <header className="mx-3 my-4 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-wider text-sky-500">Todo App</h1>
                    <p className="text-sm text-gray-400 tracking-wider">sava my todo app</p>
                </div>
            </header>

            {/* Main */}
            <main className="bg-blue-400 card-white relative">

                <div className="bg-white rounded-full w-12 h-10 flex justify-center items-center text-xl absolute">
                    <button>
                        <PlusCircleIcon className='w-7 h-7 text-sky-500 rounded-full' />
                    </button>
                </div>
                <div id='tasks' className='flex flex-col items-center justify-center bg-slate-300 px-4'>

                    {/* task one */}
                    <div id='task' className='card-white border-l-4 border-sky-900 flex justify-between max-w-lg w-full'>
                        <div id='left-side'>
                            <div id='category'>
                                <h5 className='font-semibold text-gray-500'>Learning</h5>
                            </div>
                            <div id='content' className='mt-1'>
                                <h1 className='text-xl font-bold tracking-wider'>Learning MERN Stack</h1>
                                <div className='flex mt-1 gap-1 items-center'>
                                    <CalendarIcon className='w-5 h-5 text-gray-600' />
                                    <span className='text-md text-gray-500'>2021-2-23</span>
                                </div>
                            </div>
                        </div>
                        <div id='right-side' className='flex flex-col gap-2'>
                            <CheckIcon className='w-6 h-6 cursor-pointer text-green-400' />
                            <TrashIcon className='w-6 h-6 cursor-pointer text-red-400' />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )

}

export default Main;

