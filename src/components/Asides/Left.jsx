const Left = () => {
    return (
        // left side 
        <aside id="left" className="w-20 lg:w-28 xl:w-80 flex-none shadow-lg shadow-blue-200 border-gray-50 border-2 rounded-tr-2xl bg-white">
            <div id="logo" className="flex items-center justify-center">
                <div className="my-5 mx-3 rounded-full flex justify-center items-center">
                    <img src="/images/todo logo 1.jpg" className="lg:w-14 lg:h-auto m-0 p-0 rounded-md shadow-sky-200 shadow-xl flex justify-center items-center" />
                </div>
                <div id="logo-texts" className="hidden xl:block">
                    <h1 className="text-2xl font-bold text-sky-500">Todo App</h1>
                    <p className="text-sm text-gray-400 tracking-wider">sava my todo app</p>
                </div>
            </div>
        </aside>
    )
}

export default Left;