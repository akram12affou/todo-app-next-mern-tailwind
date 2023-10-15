'use client';
import {Fragment, useState ,useEffect ,useRef, MutableRefObject} from 'react'
import {FaBars} from 'react-icons/fa'
import Link from 'next/link';
import {useContext} from 'react'
import { AuthContext } from '../Context/authContext';
export default function NavBar(){
  const {user} = useContext(AuthContext)
  const [open,setOpen] = useState<boolean>(false);
  const section: MutableRefObject<any>  = useRef()
  useEffect(() => {
    if(open){
       section.current.className = section.current.className.replace('translate-x-full','translate-0')
    }else{
       section.current.className = section.current.className.replace('translate-0','translate-x-full')
    }
  },[open])
  return (
    <Fragment>
      <div className='p-7 flex items-center justify-between mx-auto bg-slate-300 h-12'>
       <div className="text-2xl font-bold">
        Todo App 
        {/* {JSON.stringify(user)} */}
       </div>
       <div className="hidden items-center sm:w-1/3 sm:flex justify-evenly ">
       <Link href='/'><button className="hover:opacity-80">Home</button></Link>
       <Link href='/login'><button className="hover:opacity-80">Login</button></Link>
       </div>
       <div className="text-2xl flex items-center sm:w-1/3 sm:hidden justify-between hover:cursor-pointer" onClick={() => setOpen(prev => !prev)}>
        <FaBars/>
       </div>
      </div>
       <section ref={section} className='flex translate-x-full origin-center transition duration-200 ease-in-out flex-col bg-slate-300 w-1/2 absolute right-0 height-link gap-10 sm:hidden'>
          <button className="hover:opacity-80 font-semibold mt-10"><Link href='/'>Home</Link></button>    
          <button className="hover:opacity-80 font-semibold  "><Link href='/login'>login</Link></button>
       </section>
    </Fragment>
   
  )
}