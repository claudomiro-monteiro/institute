import { NavLink } from './nav-link'
import { createContext, useContext, useState } from 'react'
import { MobileButton } from '../mobile-button'
import { Sidebar } from '../sidebar/sidebar'

interface handleToggleMenuProps {
  isMenuOpen: boolean
  handleToggleMenu: () => void
}

export const ToggleContext = createContext({} as handleToggleMenuProps)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ToggleContext.Provider value={{ isMenuOpen, handleToggleMenu }}>
      <header className='sticky top-0 z-10 flex h-20 w-full items-center justify-between bg-blue-900 px-10 sm:h-24'>
        <a href='/'>
          {/* <img src='/institute.png' alt='' className='h-12 sm:h-16' /> */}
          <span className='font-semibold text-xl text-yellow-500'>
            INSTITUTO
          </span>
          <h1 className='font-bold text-white'>SÃO GABRIEL</h1>
        </a>
        <nav className='hidden h-full items-center text-blue-50 sm:flex'>
          <NavLink href='/'>Inicio</NavLink>
          {/* <NavLink href='/#services'>Serviços</NavLink> */}
          <NavLink href='/#about'>Sobre nós</NavLink>
          <NavLink href='/#contact'>Contato</NavLink>
        </nav>
        <div className='ml-auto flex sm:hidden'>
          <MobileButton />
          <Sidebar />
        </div>
      </header>
    </ToggleContext.Provider>
  )
}

export const useToggleMenu = () => useContext(ToggleContext)
