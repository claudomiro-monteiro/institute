import type { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink(props: NavLinkProps) {
  return (
    <a
      {...props}
      className='relative inline-block h-24 px-4 leading-[96px] transition duration-200 hover:text-blue-900 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:rounded-t hover:after:bg-blue-900 hover:after:content-[""]'
    >
      {props.children}
    </a>
  )
}
