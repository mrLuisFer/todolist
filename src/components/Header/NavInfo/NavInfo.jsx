import React from 'react'
import { useHistory } from 'react-router'

import { NavInfoContainer, NavInfoListElement } from './NavInfo.styles'

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

export default function InfoComponent() {
  const history = useHistory()

  const handleUrlToPush = (url = '') => {
    if (url.length > 0) {
      history.push(url)
    }
  }

  return (
    <NavInfoContainer>
      <ul>
        {infoNav.map(({ linkName, url }, id) => (
          <NavInfoListElement key={id} onClick={() => handleUrlToPush(url)}>
            {linkName}
            <i className='fas fa-caret-right'></i>
          </NavInfoListElement>
        ))}
      </ul>
    </NavInfoContainer>
  )
}
