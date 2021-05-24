import React from 'react'

import { NavContainer, NavIcon, NavTitle } from './Nav.styles'

export default function index() {
  return (
    <NavContainer>
      <NavTitle>What's up, Luis</NavTitle>
      <div>
        <NavIcon className='fas fa-hamburger'></NavIcon>
      </div>
    </NavContainer>
  )
}
