import { Link } from "react-router-dom"

export default function Navigation(){
  return(
    <nav className="flex justify-between  py-8">
      <li className="flex ">
        <Link to="/">Peter_Dev<img className="inline-block ml-2" src="/favicon.png" alt="" /></Link>
      </li>
      <ul className="flex gap-4 uppercase">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}