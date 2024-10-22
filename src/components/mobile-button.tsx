import { Sling as Hamburger } from 'hamburger-react'
import { useToggleMenu } from './header/header'

export function MobileButton() {
  const { isMenuOpen, handleToggleMenu } = useToggleMenu()
  return (
    <Hamburger
      toggle={handleToggleMenu}
      toggled={isMenuOpen}
      duration={0.7}
      easing='ease-in'
      color={isMenuOpen ? '#eab308' : '#FFF'}
      size={28}
      rounded
    />
  )
}
