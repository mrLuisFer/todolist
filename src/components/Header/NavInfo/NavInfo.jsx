import React from 'react'
import { useHistory } from 'react-router'
import { infoNav } from './infoNav'

import { NavInfoContainer, NavInfoListElement } from './NavInfo.styles'

export default function InfoComponent() {
  const history = useHistory()

  const handleUrlToPush = (url = '') => {
    if (url.length > 0) {
      history.push(url)
    } else {
      history.push('/')
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
