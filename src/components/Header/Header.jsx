import React, { useEffect, useState } from 'react'

import { NavContainer, NavIcon, NavTitle, NavTitleSpan } from './Header.styles'

export default function Nav({ username }) {
  const [showInfoMenu, setShowInfoMenu] = useState(false)

  const closeMenuIcon = 'far fa-minus-square'
  const defaultMenuIcon = 'far fa-caret-square-down'

  const handleShowMenu = () => {
    setShowInfoMenu(!showInfoMenu)
  }

  useEffect(() => {
    setShowInfoMenu(false)
  }, [])

  return (
    <NavContainer>
      <NavTitle>
        What's up, <NavTitleSpan>{username}!</NavTitleSpan>
      </NavTitle>
      <div>
        <NavIcon
          className={showInfoMenu ? closeMenuIcon : defaultMenuIcon}
          onClick={handleShowMenu}
        ></NavIcon>
      </div>
      {showInfoMenu ? <p>INFO</p> : ''}
    </NavContainer>
  )
}
