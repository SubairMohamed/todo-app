import { PlusCircleIcon } from '@heroicons/react/solid';

const Main = () => {
    return (
        <section id="main" className="grow font-nunito">
            {/* header */}
            <header className="mx-3 my-4 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-wider text-sky-500">Todo App</h1>
                    <p className="text-sm text-gray-400 tracking-wider">sava my todo app</p>
                </div>
                <div className="bg-white rounded-full w-10 h-8 flex justify-center items-center  text-xl">
                    <button>
                        <PlusCircleIcon className='w-7 h-7 text-sky-500 rounded-full' />
                    </button>
                </div>
            </header>

            {/* Main */}
            <main className="bg-blue-400 card-white">
                <div id='tasks'>
                    <div id='task' className='card-white border-l-4 border-sky-900'>
                        <div>
                            <h5 className='font-semibold ml-3 text-slate-800'>Learning</h5>
                        </div>
                        <div>
                            <h1>Learning MERN Stack</h1>
                            <span>2021-2-23</span>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )

}

export default Main;

