'use client'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function Editor({notes, setNotes}:any){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const saveNote = ()=>{
        if(notes.length){
            setNotes([{id:uuidv4(), title,body},...notes])
            localStorage.setItem('items', JSON.stringify([{id:uuidv4(), title,body}, ...notes]))
        }else{
            setNotes([{id:uuidv4(), title,body}])
            localStorage.setItem('items', JSON.stringify([{id:uuidv4(), title,body}]))
        }
    }
    return (
        <>
            <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="bg-sky-100 w-[100%] h-[10%] px-3 focus:outline-none border-b-[1px]  border-solid border-slate-200" placeholder="Give it a title...."/>
            <textarea onChange={(e)=>{setBody(e.target.value)}} className="bg-sky-100 w-[100%]  h-[80%] focus:outline-none px-3 resize-none" placeholder="Enter the body...."></textarea>
            <button onClick={saveNote} className="btn bg-sky-700 py-2 px-3 text-white float-right">Save</button>
        </>
    )
}