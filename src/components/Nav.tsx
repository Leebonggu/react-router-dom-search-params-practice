import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav
      className='flex gap-2 py-5'
    >
      <NavLink to='/'>
        <li className='bg-emerald-400 py-2 px-5 rounded-lg text-white font-bold'>
            <span>Home</span>
        </li>
      </NavLink>
      <NavLink to='/detail?name=이봉구&place=인천&food=["chicken", "pig-foot"]&information={"a": 1, "b": 2}'>
        <li className='bg-emerald-400 py-2 px-5 rounded-lg text-white font-bold'>
            <span>Detail</span>
        </li>
      </NavLink>
      <NavLink to='/each/1'>
        <li className='bg-emerald-400 py-2 px-5 rounded-lg text-white font-bold'>
            <span>Each</span>
        </li>
      </NavLink>
    </nav>
  )
}

export default Nav