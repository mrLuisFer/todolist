import React from 'react'

import { NavInfoContainer, NavInfoListElement } from './NavInfo.styles'

export default function InfoComponent() {
  return (
    <NavInfoContainer>
      <ul>
        <NavInfoListElement>About</NavInfoListElement>
        <NavInfoListElement>Contact</NavInfoListElement>
      </ul>
    </NavInfoContainer>
  )
}
