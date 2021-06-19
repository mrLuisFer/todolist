import React from 'react'
import { useHistory } from 'react-router'
import {
  NavInfoContainer,
  NavInfoListElement,
  NavInfoList,
} from './NavInfo.styles'

export default function InfoComponent() {
  const history = useHistory()

  const deleteLocalStorageLogin = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <NavInfoContainer>
      <NavInfoList>
        <NavInfoListElement onClick={deleteLocalStorageLogin}>
          Log Out
        </NavInfoListElement>
      </NavInfoList>
    </NavInfoContainer>
  )
}
