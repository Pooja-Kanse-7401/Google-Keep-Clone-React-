import React, { useState } from 'react'
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoMdBrush } from "react-icons/io";
import { MdOutlineImage, MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addNotes, removeNotes, updateNotes } from '../Utils/noteSlice';
import { nanoid } from '@reduxjs/toolkit';

function Home() {

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  const [input, setInput] = useState([{
    id : "",
    title : "",
    text : ""
  }])

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleNotes = (e) => {
    e.preventDefault()
    const inputId = {...input , id : nanoid()}
    dispatch(addNotes(inputId))
    alert("Submited")
  }
  const editNote = (id) => {
    const updatedData = {
        id : id,
        title : input.title,
        text : input.text
    }

    dispatch(updateNotes(updatedData))
}

  return (
    <>
      <div className='flex justify-center items-center flex-col mt-8'>
        <div className='flex justify-around items-start md:flex-row flex-col-reverse border-2 shadow-md shadow-zinc-400 p-3 md:w-[50%] w-[100%] rounded-lg'>
          <span className='flex flex-col w-[100%] mr-2'>
            <form action="" onSubmit={handleNotes} className='flex flex-col w-[100%] mr-2'>
              <input type="text" name="title" id="title" value={input.title} placeholder='Title' className='outline-none text-lg text-zinc-900 font-semibold' onChange={handleChange}/>
              <textarea type="text" name="text" id="text" value={input.text} placeholder='Take a note...' className='outline-none text-zinc-950' onChange={handleChange}/>
              <button className='m-1 ml-0 border w-[70%] md:w-[30%] p-1 px-2 rounded-md text-zinc-500 shadow-md hover:text-zinc-800 hover:shadow-zinc-400'>Add Note</button>
            </form>
          </span>
          <span className='flex justify-around items-center gap-5 text-zinc-500 text-xl'>
            <FaRegSquareCheck />
            <IoMdBrush />
            <MdOutlineImage className='text-2xl' />
          </span>
        </div>
        <div className='flex justify-start items-center flex-wrap w-[80%] mt-10'>
          {
            notes?.map((val, i) => {
              return (
                <>
                  <div id={i} key={val.id} className='w-[auto] p-2 border shadow-md hover:shadow-zinc-400 m-2 text-end rounded-md'>
                    <span className='text-start'>
                      <h1 className='text-lg text-zinc-900 font-semibold text-wrap'>{val.title}</h1>
                      <p className='text-zinc-950 '>{val.text}</p>
                    </span>
                    <button 
                    onClick={()=> editNote(val.id)}
                    className='text-2xl text-zinc-500 hover:text-zinc-900 mx-1'><MdOutlineEdit /></button>
                    <button
                    type='submit'
                    onClick={() => dispatch(removeNotes(val.id))}
                    className='text-2xl text-zinc-500 hover:text-zinc-900 mx-1' ><MdDeleteOutline /></button>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
