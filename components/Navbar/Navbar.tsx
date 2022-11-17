import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/" id='home'>
          Home
        </Link>
        <Link href="/about" id='about'>
          About
        </Link>
      </menu>
    </nav>
  )
}