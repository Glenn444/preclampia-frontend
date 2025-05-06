import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <ul className='flex space-x-3'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      <Outlet />
    </React.Fragment>
  )
}
