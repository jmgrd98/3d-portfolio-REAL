import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className={'w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'}>
            <p className='blue-gradient-text'>JD</p>
        </NavLink>
        <div className='flex gap-3'>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
        </nav>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/projects' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Contact
            </NavLink>
        </nav>
        </div>
    </header>
  )
}

export default Navbar