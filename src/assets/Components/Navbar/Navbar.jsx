import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='bg-[#03346E] p-5'>
          <div className="container mx-auto">
               <ul className='flex flex-wrap justify-center items-center gap-10 text-white uppercase font-bold text-sm md:text-xl'>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#6EACDA] transition-all" : "text-white hover:text-[#6EACDA] transition-all"}>home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#6EACDA] transition-all" : "text-white hover:text-[#6EACDA] transition-all"}>about</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#6EACDA] transition-all" : "text-white hover:text-[#6EACDA] transition-all"}>contact</NavLink></li>
                    <li><NavLink to="/layout-two" className={({ isActive }) => isActive ? "text-[#6EACDA] transition-all" : "text-white hover:text-[#6EACDA] transition-all"}>layout 2</NavLink></li>
               </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar
