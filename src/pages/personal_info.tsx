import React from 'react'
import ExamCard from '../../components/ExamCard'
import {exams} from '../../data'
import { motion  } from 'framer-motion'
import { fadeInUp } from '../../animations'




const personal_info = () => {
  return (
    <motion.div variants={fadeInUp} >

    <div className='flex flex-col flex-grow px-6 py-4 pt-2 my-6 overflow-x-scroll font-medium tracking-wider dark:bg-slate-500 dark:text-white font-kaushan '>
        <div className='overflow-y-scroll' style={{height:'95vh'}}>
            <div className='flex flex-auto mx-2 gap-x-6'>
                <div>
                    <p><b>Name: </b> Sheikh Mahmudul Hasan Shium</p>
                    <p><b>Father&#39;s Name: </b> Sheikh Akram Uddin</p>
                    <p><b>Mother&#39;s Name: </b> Sahida Sultana Hira</p> 

                    <p><b>Date of Birth: </b> 24-December-2000</p>
                    <p><b>Contact No: </b> +8801729771453</p>
                    <p><b>Email: </b> sheikh.mahmudul.hasan.shium. aiub@gmail.com</p>
                    <p><b>Blood Group:</b> A+</p>
                    <p><b>Gender: </b> Male</p>
                    <p><b>Religion: </b> Islam</p>
                    <p><b>Marital Status: </b> Unmarried</p>
                </div>
                <motion.img initial={{rotate:10, scale: 0 }} animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            src="./images/shium2.JPG" className='mx-auto rounded-lg ' height='108' width='128'  alt="Profile-Pic"/>    
                
            </div>
        <div className='gap-2 py-5 mx-2 font-medium tracking-wider '>
            <div >
            <b>Present Address: </b>
                <p className='py-2 text-sm'>
                    <b> Town/City: </b> Ashuganj, 
                    <b> District: </b> Brahmanbaria,
                    <b> Division: </b> Chittagong,
                    <b> Country: </b> Bangladesh
                </p>
            </div>
            
            <div className='py-4'>
            <b>Permanent Address: </b>
                <p className='py-2 text-sm '>
                    <b> Village: </b> Teligati,
                    <b> District: </b> Khulna,
                    <b> Division: </b> Khulna,
                    <b> Country: </b> Bangladesh
                </p>
            </div>
                
        </div>
        <div className='flex flex-auto gap-2 py-2 mx-2 '>
            <div className=''>
                <b>Academic Qualification:</b>
                <div className='flex flex-wrap gap-5 px-2 py-4 my-4 overflow-x-scroll tracking-tighter rounded-lg text-shiumcustom font-extralight dark:bg-gray-200 bg-slate-100'style={{width:"95vh"}} >
                <div className='grid grid-cols-6 gap-5 mx-4 lg:gap-14 border-shiumcustom'>
                    <h3>Exam</h3>
                    <h3>Institute</h3>
                    <h3>Department /Group</h3>
                    <h3>Board</h3>
                    <h3>Result</h3>
                    <h3>Passing Year</h3>
                </div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    {exams.map(exams=>(
                        <div className='' key={exams.name}>
                            <ExamCard exam={exams} />
                        </div>
                    ))}
                </motion.div>
                
      
                </div>
            </div>
        </div>
        </div>
    </div>
    </motion.div>
  )
}

export default personal_info
