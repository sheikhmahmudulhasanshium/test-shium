import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import {ThemeProvider} from 'next-themes'
import {AnimatePresence} from 'framer-motion'
import useSound from 'use-sound';


 

export default function App({ Component, pageProps,router }: AppProps) {
  //const [isClicked,setIsClicked]=useState(false);
  //const [clickced] =useSound('/sounds/Click.mp3',{volume:1})
  function ClickSound(){
    
    clicked()
  }
  const [clicked] = useSound('sounds/Click.mp3',{volume:1})
  return (
    
    <ThemeProvider attribute='class' >
      
         <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-2 xl:px-48 sm:px-20 md:px-32 md:mb-16' onClick={ClickSound}>
            <div className='col-span-12 p-4 text-base text-center bg-white dark:text-white dark:bg-slate-600 lg:col-span-3 rounded-2xl'>
              <Sidebar/>
            </div>
            <div className='flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl dark:bg-slate-600'>
              <Navbar/>
                <AnimatePresence mode='wait'>
                  <Component {...pageProps} key={router.route} />
                </AnimatePresence>
              
            </div>
          </div>
 
    </ThemeProvider>
   
  )
     
}
