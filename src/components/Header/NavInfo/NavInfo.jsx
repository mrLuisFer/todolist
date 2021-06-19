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

  const deleteLocalStorageLogin = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <NavInfoContainer>
      <ul>
        {infoNav.map(({ linkName, url, icon }, id) => (
          <NavInfoListElement key={id} onClick={() => handleUrlToPush(url)}>
            {linkName}
            {icon ? <i className="fas fa-caret-right"></i> : ''}
          </NavInfoListElement>
        ))}
        <NavInfoListElement onClick={deleteLocalStorageLogin}>
          Log Out
        </NavInfoListElement>
      </ul>
    </NavInfoContainer>
  )
}
