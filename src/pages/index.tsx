//import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import React from 'react'
import {services} from '../../data'
import ServiceCard from '../../components/ServiceCard'
import { motion } from 'framer-motion'
import { Stagger, fadeInUp, routeFading } from '../../animations'
const index = () => {
  //console.log('CLIENT',services)
  //console.log(services);
 // console.log(endpoint)
  return (
    <motion.div variants={routeFading} initial="initial" animate="animate" exit="exit">
    <motion.div variants={Stagger} initial="initial" animate="animate"
    className='flex flex-col flex-grow my-6 px-6 pt-1 dark:bg-slate-500 dark:text-white ' >
      <h6 className='my-3 text-base font-medium'>
        Hello, I am <b>Sheikh Mahmudul Hasan Shium</b>. I am from CSE Department from <b> American International Univerity-Bangladesh</b> . Recently I am doing my internship in Petspital as a <b>Software Engineer (Intern)</b>. At present I am learning <b>React.js, Type.js, Framer Motion Animation etc.</b> for front-end development. Hope that, I will be able to enrich my knowledge and skills from here.
      </h6>
      <div className='flex-grow p-4 mt-5 bg-shiumcustom dark:bg-slate-800' style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
       <h4 className='my-3 text-xl font-semibold tracking-wide'> What I Offer </h4>
      <div className='grid gap-6 lg:grid-cols-2 overflow-y-scroll'style={{height:'60vh'}}>
        
        {services.map(service=>(
          <motion.div
            variants={fadeInUp} key={service.title}
           className='col-span-2 p-2 rounded-lg bg-slate-400 md:col-span-1 dark:bg-slate-400'>
          <ServiceCard service={service}/>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
  </motion.div>
  )
}
export default index
//works in dynamic pages like newsfeed
//export const getServerSideProps:GetServerSideProps=async (
 // context:GetServerSidePropsContext )=>{
 // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  //const data=await res.json()
  //console.log(data)
  //console.log('SERVER',services)
 // return {
   // props:{
      //services:data.services,
   //   endpoint:process.env.VERCEL_URL
 //   }
 // }
//}

/* used in static pages like FAQ, Resume etc. Just load once after that nothing is required
export const getStaticProps=async (context:GetStaticPropsContext)=>{
  const res=await fetch('http://localhost:3000/api/services')
  const data=await res.json()
  console.log('SERVER',services)
  return {
    props:{
      services:data.services,
    }
  }
}
*/