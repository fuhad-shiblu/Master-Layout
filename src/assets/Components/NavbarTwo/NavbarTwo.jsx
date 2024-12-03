import { NavLink } from "react-router-dom"

const NavbarTwo = () => {
  return (
    <>
    <nav className='bg-[#03346E] p-5'>
          <div className="container mx-auto">
               <ul className='flex flex-wrap justify-center items-center gap-10 text-white uppercase font-bold text-sm md:text-xl'>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#6EACDA] transition-all" : "text-white hover:text-[#6EACDA] transition-all"}>home</NavLink></li>
                    <li><NavLink to="/layout-two/projects" className={({ isActive }) => isActive ? "text-[#3DC2EC] transition-all" : "text-white hover:text-[#3DC2EC] transition-all"}>projects</NavLink></li>
                    <li><NavLink to="/layout-two/works" className={({ isActive }) => isActive ? "text-[#3DC2EC] transition-all" : "text-white hover:text-[#3DC2EC] transition-all"}>works</NavLink></li>
               </ul>
          </div>
      </nav>
    </>
  )
}

export default NavbarTwo
