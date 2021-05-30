import React from 'react'

import {
  NavInfoContainer,
  NavInfoListElement,
  NavInfoListElementLink,
} from './NavInfo.styles'

export default function InfoComponent() {
  const infoNav = [
    {
      linkName: 'About',
      url: '/about',
    },
    {
      linkName: 'Contact',
      url: '/contact',
    },
  ]

  return (
    <NavInfoContainer>
      <ul>
        {infoNav.map((infoLink, id) => (
          <NavInfoListElement key={id}>
            <NavInfoListElementLink to={infoLink.url}>
              {infoLink.linkName}
            </NavInfoListElementLink>
            <i className='fas fa-caret-right'></i>
          </NavInfoListElement>
        ))}
      </ul>
    </NavInfoContainer>
  )
}
