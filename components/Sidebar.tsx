import React from 'react'
import {AiFillGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations'
import { useTheme } from "next-themes";
import useSound from 'use-sound';
//import customSound from 'sounds/Click.mp3'
//console.log(customSound)

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    
   setTheme(theme === "light" ? "dark" : "light");
   clicked()
  }
  const [clicked] = useSound('sounds/Click.mp3',{volume:1}) 
  
  return (
    <>
      <Image src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/328811966_616559640278489_6401651324655420191_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHYgjkJrB0FWwNwK1tyHx_j4YpZEI_10pvhilkQj_XSm4SDlwSV1ZqipPhtMZwzaEoZQ4exi3b7xh3Z4y--sm1s&_nc_ohc=M4KedyvhwJgAX-coEIu&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAfii8hMLuLkgOX5npk0fFjJw-rafbO9UfEaCOMxN2EFw&oe=646DF4A4" 
      className='mx-auto rounded-full ' height='128' width='128' layout='intrinsic' quality='100'
      alt="Profile-Pic"/>
      <motion.h3 initial={{rotate:30, scale: 0 }} animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
       className='my-4 text-1.5xl font-medium tracking-wider font-kaushan '>
        <span className='text-shiumcustom'>
          SHEIKH MAHMUDUL</span>  HASAN SHIUM
          </motion.h3>
      <motion.p variants={fadeInUp} initial="initial" animate="animate"
      className='px-2 py-1 my-3 rounded-full bg-shiumcustom '>Front-End Development Learner</motion.p>
      <motion.a variants={fadeInUp} initial="initial" animate="animate"
        href='/assets/Corrected_cv.pdf' className='flex items-center justify-center px-2 py-2 my-3 rounded-full bg-shiumcustom' download='CV-Of-Sheikh-Mahmudul-Hasan-Shium' target='_blank'><div className='w-5 h-5'><GiTie /></div>Download Resume</motion.a>
      {/*Social Media*/}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-shiumcustom md:w-full'>
        <a href="https://github.com/sheikhmahmudulhasanshium" target={'_blank'}><div className='w-10 h-10 cursor-pointer'><AiFillGithub   /></div></a>
        <a href="https://www.linkedin.com/in/sheikh-mahmudul-hasan-shium-5b5938189/" target={'_blank'}><div  className="w-10 h-10 cursor-pointer"><AiFillLinkedin /></div></a>
        <a href="https://www.facebook.com/skmahmudul.hasanshium" target={'_blank'}><div className='w-10 h-10 cursor-pointer'><AiFillFacebook /></div></a>
      </div>
      {/*address*/}
      <div className='py-4 my-5 bg-shiumcustom 'style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
        <div className='flex items-center justify-center space-x-2'><GoLocation/>
             <span>Dhaka, Bangladesh</span>   
        </div>
        <p className='my-2 text-sm md:px-3'>sheikh.mahmudul.hasan.shium. aiub@gmail.com</p>
        <p className='my-2'>01729771453/01622937429</p>
      </div>
      <button className='w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-slate-300 to-shiumcustom focus:outline-none'
       
       onClick={()=>window.open('mailto:sheikh.mamhmudul.hasan.shium.aiub@gmail.com')
      }>Email</button>
      <button onClick={changeTheme} className='w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-slate-300 to-shiumcustom'>Toogle UI</button>
    </>
  )
}

export default Sidebar;
