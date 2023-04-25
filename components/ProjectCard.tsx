import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md'
import { IProject } from '../type'
import Image from 'next/image';
import { Stagger, fadeInUp } from '../animations';
import { motion } from 'framer-motion';
 const ProjectCard:FunctionComponent<
 {
    project:IProject;
    showDetail:null|number;
    setShowDetail:(id:null|number)=>void;
 }
 > = ({project:{
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_tech,
    id,
 },
 showDetail,setShowDetail,
}) => {
   return (
     <div className='bg-gray-300 '>
       <Image src={image_path} alt="name" className='cursor-pointer' onClick={()=>setShowDetail(id)} width="300" height="150" layout="responsive"
       />
       {/*<img src={image_path} alt="name" className='cursor-pointer' onClick={()=>setShowDetail(true)}/>
       */ }
       <p className='my-2 text-center'>{name}</p>
       
       {showDetail===id &&
       <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black rounded-lg md:grid-cols-2 md:p-10 gap-x-12 bg-shiumcustom">
            <motion.div variants={Stagger} initial="initial"animate="animate">
                {/*<img src={image_path} alt={name} />*/}
                <motion.div variants={fadeInUp} className='border-4 border-gray-400' >
                    <Image src={image_path} alt={name} layout='responsive' height='150' width='300'/>
                
                </motion.div>
                <motion.div variants={fadeInUp}
                className='flex justify-center my-4 space-x-3'>
                    <a href={github_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-slate-500'>
                        <AiFillGithub/><span>Github</span>
                    </a>
                    <a href={deployed_url} className='flex items-center px-4 py-2 space-x-3 text-lg rounded-sm bg-slate-500'>
                        <AiFillProject/><span>Project</span>
                    </a>
                </motion.div>
        
            </motion.div>
        
                <motion.div variants={Stagger} initial="initial"animate="animate">
                    <motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                    <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>{description}</motion.h3>
                    <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                    {
                        key_tech.map(tech=>
                    <span key={tech} className='px-2 my-2 bg-slate-500 '>
                        {tech}
                    </span>
                            )
                    }
                    </motion.div>
                    
                </motion.div>
                <button onClick={()=>setShowDetail(null)}
                className='absolute bg-gray-400 top-3 right-3 rouded-full focus:outline-none'
                >
                    <MdClose size={30}/>
                </button>
       </div>}
     </div>
   )
 }
 
 export default ProjectCard
 