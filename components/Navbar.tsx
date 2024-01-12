import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem:FunctionComponent<{
activeItem:string,
setActiveItem:Function,
name:string,
route:string

}>=({activeItem,name,route,setActiveItem})=>{
    return (
        activeItem!==name ? (
        
            <Link  href={route}>
            
                <span onClick={()=>setActiveItem(name)} className="hover:text-shiumcustom dark:text-white dark:hover:text-shiumcustom">
                    {name}
                </span>
            
            
            </Link>
          )  : null
    )
}
const Navbar = () => {
    const [activeItem,setActiveItem]=useState('')
    const {pathname}=useRouter()
    
    React.useEffect(()=>{
        if(pathname==="/" )setActiveItem('About')
        if(pathname==="/projects" )setActiveItem('Projects')
        if(pathname==="/resume" )setActiveItem('Resume')
        if(pathname==='/personal_info')setActiveItem('Personal Info')
    }, 
    [])
  return (
    <div className='flex justify-between px-5 py-3 my-3 space-x-5 overflow-x-scroll'>
        <span className='text-xl font-bold border-b-4 border-shiumcustom text-shiumcustom md:text-2xl ' >
             {activeItem}
        </span>
      <div className='flex space-x-5 text-lg text-gray-500 '>
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'/>  
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'/>  
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'/>  
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Personal Info' route='/personal_info'/>
    </div>
    </div>
  )
}

export default Navbar
