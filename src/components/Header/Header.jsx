import React from 'react'

import { NavContainer, NavIcon, NavTitle } from './Header.styles'

export default function Nav({ username }) {
  return (
    <NavContainer>
      <NavTitle>
        What's up, <span>{username}</span>
      </NavTitle>
      <div>
        <NavIcon className='fas fa-hamburger'></NavIcon>
      </div>
    </NavContainer>
  )
}
