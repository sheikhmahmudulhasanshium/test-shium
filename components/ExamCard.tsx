import React, { FunctionComponent } from 'react'
import { IExams } from '../type'
const ExamCard:FunctionComponent<{exam:IExams}> = ({exam:{name,department,institute,board,result,passing_year}}) => {
  return (
    <div className='text-black grid grid-cols-6 gap-x-6  lg:px-4'>
        
        <div>{name}</div>
        <div className='font-light '>{institute}</div>
        <div className='font-light '>{department}</div>
        <div className='font-light '>{board}</div>
        <div className='font-light '>{result}</div>
        <div className='font-light '>{passing_year}</div>
    </div>
  )
}

export default ExamCard
