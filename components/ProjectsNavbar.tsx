import React, { FunctionComponent } from 'react'
import { Category } from '../type'


export const NavItem:FunctionComponent<{value:Category | 'all'; handleFilterCategory:Function; active:string;}> = ({value,handleFilterCategory,active}) => {

    let className="capitalize cursor-pointer hover:text-shiumcustom";
    if(active===value) className +=" text-shiumcustom";

 
    return (
    <li className={className} onClick={()=>handleFilterCategory(value)}>
      {value}
    </li>
  )
}



const ProjectsNavbar:FunctionComponent<{handleFilterCategory:Function;active:string;}> = (props) => {
  return (
    <div className='flex space-x-3 overflow-x-auto list-none dark:text-white '>
      <NavItem value='all'{...props}/>
      <NavItem value='react'{...props}/>
      <NavItem value='C++'{...props}/>
      <NavItem value='python'{...props}/>
      <NavItem value='node'{...props}/>
      <NavItem value='other'{...props}/>
    

    </div>
  )
}

export default ProjectsNavbar;
