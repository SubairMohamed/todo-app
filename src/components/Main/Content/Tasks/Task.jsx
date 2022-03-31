import { CheckIcon } from '@heroicons/react/solid';
import { CalendarIcon, TrashIcon, } from '@heroicons/react/outline';

const Task = () => {
    return (
        //  task one 
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
    );
};
export default Task;