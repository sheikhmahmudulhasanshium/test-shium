import React, { FunctionComponent } from 'react'
import { IService } from '../type'
const ServiceCard:FunctionComponent<{service:IService} >= ({service:{Icon,title,about}}) => {
  const createMarkup=()=>{
    return {
      __html:about
    }
  }
  return (
    <div className='flex items-center p-2 space-x-5 '>
      <div className= ' text-shiumcustom h-22 w-22'><Icon ></Icon></div>  
      <div>
        <h4 className='font-bold'>{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  )
}

export default ServiceCard
