import type { ComponentProps } from 'react'

interface SidebarLinkprops extends ComponentProps<'a'> {
  children: string
}

export function SidebarNavLink(props: SidebarLinkprops) {
  return (
    <a
      id='link'
      className='flex h-20 w-full items-center justify-center text-center hover:bg-yellow-500'
      {...props}
    >
      {props.children}
    </a>
  )
}
