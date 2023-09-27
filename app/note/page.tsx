'use client'
import { useEffect, useState } from "react";
import Editor from "../components/editor";

export default function Main(){
    const [notes, setNotes] = useState<any[]>([]);
    useEffect(()=>{
        let existingNotes = localStorage.getItem('items')
        if(existingNotes){
            setNotes(JSON.parse(existingNotes))
        }else{
            setNotes([])
        }
    },[])
    return (
        <div className="container  p-7  mx-auto h-screen bg-sky-900 ">
            <div className="flex h-[100%]">
                <div className=" overflow-y-auto  space-y-3 w-[30%] p-2">
                    <h1 className="text-center  p-4 bg-sky-600 text-white">Notes</h1>
                    {
                       notes ? notes.map((note:any)=>{
                            return (
                                <div key={note.id} className="p-2 bg-sky-300">
                                    <h2>{note.title}</h2>
                                    <p>{note.body}</p>
                                </div>
                            )
                        }) : null
                    }
                </div>
                <div className=" w-[70%] p-2">
                    {<Editor notes={notes} setNotes={setNotes}/>}
                </div>
            </div>
        </div>
    )
}