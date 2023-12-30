import React from 'react';
import { FaCloudDownloadAlt, FaRegFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
    <FaRegFileAlt/>
    <p className='text-sm mt-5 font-semibold leading-tight'>{data.discription}</p>
    <div className='footer absolute bottom-0 w-full left-0'>
       <div className='flex items-center justify-between px-8 py-3 mb-1'> 
            <h5>{data.filesize}</h5>
            <span className={`w-7 h-7 bg-${data.tag.tagColor}-600 flex rounded-full items-center justify-center py-3`}>
                {data.close ? <IoIosClose/> : <FaCloudDownloadAlt size =".7em" color='#fff'/>}
            </span>
       </div>
       {data.tag.isOpen && (<div className='tag w-full py-4 bg-green-600 flex items-center justify-center'><h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3></div>)}
       

    </div>
    </motion.div>
  )
}

export default Card
