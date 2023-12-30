import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            discription : "The Land: Founding- Tricked into a world of banished gods, demons, goblins, sprites and magic, Richter must learn to....",
            filesize: ".5mb",
            close:false,
            tag: {isOpen: true, tagTitle:"Download Now", tagColor:"green"},

        },
        {
            discription : "Welcome to Ludus- Henry and Jason led normal lives in Seattle before they were abducted to another world. Their kidnapper...",
            filesize: "1.2mb",
            close:false,
            tag: {isOpen: true, tagTitle:" Download Now", tagColor:"green"},

        },
        {
            discription : "Survival Quest- Barliona: a virtual world jam-packed with monsters, battles-and, predictably, players. Millions of them come to Barliona...",
            filesize: ".8mb",
            close:true,
            tag: {isOpen: false, tagTitle:" Download Now", tagColor:"green"},

        }
    ]

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
     {data.map((item, index)=>(
        <Card data={item} reference={ref}/>

     ))}
    
    </div>
   
    
  )
}

export default Foreground
