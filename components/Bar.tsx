import React, { FunctionComponent } from 'react'
import {ISkill} from "../type"
import {motion} from "framer-motion"
const Bar:FunctionComponent<{data:ISkill}> = ({data:{Icon,level,name}}) => {
    const bar_width = `${level}`;
    const varients={
      initial:{
        width:0
      },
      animate:{
        width:bar_width,
        transition:{
          duration:0.4,
          type:"spring",
          damping: 10,
          stiffness:100,
          
        }
      }
    }
    return (
    <div className='my-2 text-white bg-gray-600 rounded-full dark:bg-orange-300'>
      <motion.div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-shiumcustom to-green-300"  
      style={{width:bar_width, }}
      variants={varients}
      initial="initial"
      animate="animate"
      >
        <div  className='flex flex-row '> <Icon className='mr-2'/>{name}</div>
      </motion.div>
    </div>
  )
}

export default Bar
