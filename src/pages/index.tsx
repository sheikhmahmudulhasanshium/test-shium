import React from 'react'
import { services } from '../../data'
import ServiceCard from '../../components/ServiceCard'
import { motion } from 'framer-motion'
import { Stagger, fadeInUp, routeFading } from '../../animations'

const AboutIndex = () => {
  return (
    <motion.div 
      variants={routeFading} 
      initial="initial" 
      animate="animate" 
      exit="exit"
    >
      <motion.div 
        variants={Stagger} 
        initial="initial" 
        animate="animate"
        className='flex flex-col flex-grow px-6 pt-1 my-6 dark:bg-slate-500 dark:text-white' 
      >
        <h6 className='my-3 text-base font-medium'>
          Hello, I am <b>Sheikh Mahmudul Hasan Shium</b>. I am a CSE student from <b>American International University-Bangladesh</b>. Currently, I am working as a <b>Software Engineer (Intern)</b> at Petspital. I am specializing in <b>React.js, TypeScript, and Framer Motion</b> to build interactive front-end experiences.
        </h6>

        <div 
          className='flex-grow p-4 mt-5 bg-shiumcustom dark:bg-slate-800' 
          style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
        >
          <h4 className='my-3 text-xl font-semibold tracking-wide'>What I Offer</h4>
          
          {/* DDoS Protection: We use local data mapping here instead of an API call */}
          <div className='grid gap-6 overflow-y-auto lg:grid-cols-2' style={{ maxHeight: '60vh' }}>
            {services.map(service => (
              <motion.div
                variants={fadeInUp} 
                key={service.title}
                className='col-span-2 p-2 rounded-lg bg-slate-400 md:col-span-1 dark:bg-slate-400'
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AboutIndex