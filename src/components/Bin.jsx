import React from 'react'

const Bin = () => {
  return (
    <>
      <div className='flex justify-start items-center flex-col mt-8'>
        <span className='flex justify-center gap-5 items-center'>
          <h1 className='text-lg italic text-zinc-800'>Notes in the Recycle Bin are deleted after 7 days.</h1>
          <button className='text-blue-500 text-sm font-semibold hover:bg-blue-100 rounded-md px-6 p-2'>Empty bin</button>
        </span>
      </div>
    </>
  )
}

export default Bin
