import { PlusCircleIcon } from '@heroicons/react/solid';

const Main = () => {
    return (
        // Main 
        <section id="main" className="grow font-nunito">
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
            <main className="bg-blue-400 m-3 px-3 py-3 rounded-lg text-black font-bold text-xl capitalize shadow-md shadow-sky-50">
                main
            </main>
        </section>
    )

}

export default Main;

