import React from 'react'

const Loader = () => {
    return (
        <>
            <div>
                <div className='w-[100%] h-[9vh] bg-zinc-100 flex justify-around items-center'>
                    <div className='h-[90%] w-[20%] rounded-md bg-zinc-200'></div>
                    <div className='h-[90%] w-[50%] rounded-md bg-zinc-200'></div>
                    <div className='h-[90%] w-[20%] rounded-md bg-zinc-200'></div>
                </div>
                <div className='w-[100%] h-[90vh] flex'>
                    <div className="w-[20%] h-[100%] bg-zinc-100 m-1" >
                        <div className='h-[8%] w-[90%] m-2 rounded-r-full bg-zinc-200'></div>
                        <div className='h-[8%] w-[90%] m-2 rounded-r-full bg-zinc-200'></div>
                        <div className='h-[8%] w-[90%] m-2 rounded-r-full bg-zinc-200'></div>
                        <div className='h-[8%] w-[90%] m-2 rounded-r-full bg-zinc-200'></div>
                        <div className='h-[8%] w-[90%] m-2 rounded-r-full bg-zinc-200'></div>
                    </div>
                    <div className='w-[80%] h-[100%] bg-zinc-100 mt-1'>
                        <div className='h-[8%] w-[50%] ml-60 mt-5 rounded-lg bg-zinc-200'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader
