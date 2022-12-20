import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='w-screen max-w-4xl mx-auto'>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout