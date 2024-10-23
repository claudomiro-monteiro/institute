import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SidebarNavLink } from './sidebar-nav-link'
import { useEffect, useRef } from 'react'
import { useToggleMenu } from '../header/header'
import { Facebook, Instagram, Phone } from 'lucide-react'

export function Sidebar() {
  gsap.registerPlugin(useGSAP)

  const container = useRef(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  const { isMenuOpen, handleToggleMenu } = useToggleMenu()

  useGSAP(
    () => {
      gsap.set('#sidebar', { x: '100%' })
      gsap.set('#link', { opacity: 0, y: 50 })

      tl.current = gsap
        .timeline({ paused: true })
        .to('#sidebar', {
          x: 0,
          duration: 0.5,
        })
        .to('#link', {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        })
    },
    { scope: container },
  )

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play()
    } else {
      tl.current?.reverse()
    }
  }, [isMenuOpen])

  return (
    <div ref={container}>
      <nav
        id='sidebar'
        className='fixed right-0 bottom-0 left-0 z-0 flex h-[calc(100%-5rem)] flex-col justify-center bg-blue-400'
      >
        <SidebarNavLink onClick={handleToggleMenu} href='/'>
          Inicio
        </SidebarNavLink>
        <SidebarNavLink onClick={handleToggleMenu} href='#about'>
          Sobre nós
        </SidebarNavLink>
        <SidebarNavLink onClick={handleToggleMenu} href='#contact'>
          Contato
        </SidebarNavLink>
        <div className='mt-20 flex w-full justify-evenly'>
          <a href='/'>
            <Instagram size={28} />
          </a>
          <a href='/'>
            <Facebook size={28} />
          </a>
          <a href='/'>
            <Phone size={28} />
          </a>
        </div>
      </nav>
    </div>
  )
}
