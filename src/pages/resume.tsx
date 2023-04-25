import React from 'react'
import Bar from '../../components/Bar'
import { languages, tools } from '../../data'
import {motion} from 'framer-motion'
import { fadeInUp, routeFading } from '../../animations'
const Resume = () => {
  
  return (
    <motion.div variants={fadeInUp} initial='initial' animate='animate'>
    <div className="px-6 py-2 dark:text-white dark:bg-slate-800 my-4">
      {/* //! Education & Experience */}
      <motion.div variants={routeFading}
      className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">American International University -Bangladesh (2019-Present)</p>
            <p className="my-3">
              I am currently pursuing B.Sc in Computer Science & Engineering
              from AIUB
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Engineer (Intern)</h5>
            <p className="font-semibold">Petspital (2023-Present)</p>
            <p className="my-3">I am currently doing my internship in the petspital. Here I am gathering my experience and new skills.</p>
          </div>
        </div>
      </motion.div>

             {/** Language & tool */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
 
        </div> 
       
        
    </motion.div>
  )
}

export default Resume
