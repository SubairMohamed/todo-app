import { PlusCircleIcon } from "@heroicons/react/solid";

const Header = () => {
    return (
        // header 
        <header className="mx-3 my-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-wider text-sky-500">Todo App</h1>
                <p className="text-sm text-gray-400 tracking-wider">sava my todo app</p>
            </div>
            <div className="bg-white rounded-full w-7 flex justify-center items-center text-xl">
                <button>
                    <PlusCircleIcon className='w-7 h-7 text-sky-500 rounded-full' />
                </button>
            </div>
        </header>
    )
}

export default Header;