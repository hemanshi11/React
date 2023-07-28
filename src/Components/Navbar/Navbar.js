import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { SiYourtraveldottv  } from 'react-icons/si' 
import { AiFillCloseCircle , AiOutlineBars } from 'react-icons/ai'
// import {TbGridDots   } from 'react-icons/tb'

export default function CustomeNavabr() {
   const [active, setActive]  = useState('navbar')

   const  shownav = ()=>{
    setActive('navbar togglenavbar')
   }

   const removenav=()=>{
    setActive('navbar')
   }
  return (
    <section className='navbarSection'>
      <div className="header">
        <div className="logoDiv">
          <a href="" className="logo">
            <h4><SiYourtraveldottv className="icon" />Dot</h4>
          </a>
        </div>
        <div className={active}>
          <ul className='navlists flex'>
            <li className='navitem'>
             
              <Link to="/" className="navlink">Home</Link>
            </li>
            <li className='navitem'>
              <Link to="/about" className="navlink">About</Link> 

            </li>
            <li className='navitem'>
            <Link to="/contact" className="navlink">Contact</Link> 
            </li>
            <li className='navitem'>
              <a href="" className="navlink">Product </a>
            </li>
            <li className='navitem'>
              <a href="" className="navlink">Blog </a>
            </li>
           

          </ul>
          <div className="closenavbar" onClick={removenav}>
            <AiFillCloseCircle    />
          </div>
        </div>
        <div       className="togglenavbar" onClick={shownav}>
          <AiOutlineBars className='icon'  />
        </div>
      </div>
    </section>
  )
}


