import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-1/2 translate-x-[-50%] text-center flex items-center gap-1 font-medium p-1 text-[10px] md:text-xl">Created with by <FaHeart className="text-[#ff1212]"/> <Link className="font-black hover:underline" to='https://github.com/fuhad-shiblu' target='_blank'>fuhad hasan shiblu</Link></footer>
    </>
  )
}

export default Footer