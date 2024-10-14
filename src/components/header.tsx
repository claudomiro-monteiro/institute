import { X } from 'lucide-react'
import { NavLink } from './nav-link'

export function Header() {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }

  return (
    <div className='sticky top-0 z-10 flex h-20 w-full items-center justify-between bg-blue-400 px-10 sm:h-24'>
      <a href='/'>
        <img src='/vite.svg' alt='' className='h-12 sm:h-16' />
      </a>
      <X className='flex sm:hidden' />
      <nav className='hidden h-full items-center sm:flex'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/#services'>Services</NavLink>
        <NavLink href='/#about'>About</NavLink>
        <NavLink href='/#contact'>Contato</NavLink>
      </nav>
    </div>
  )
}
