import React, { useEffect, useState } from 'react'
import NavInfo from './NavInfo/NavInfo'

import { HContainer, HIcon, HTitle, HTitleSpan, HIconContainer } from './Header.styles'

/**
 *
 * @param {string} username
 * @returns React.FC
 */
export default function Nav({ username = 'user' }) {
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
    <HContainer>
      <HTitle>
        What's up, <HTitleSpan>{username}!</HTitleSpan>
      </HTitle>
      <HIconContainer>
        <HIcon
          className={showInfoMenu ? closeMenuIcon : defaultMenuIcon}
          onClick={handleShowMenu}
          title={showInfoMenu ? 'Close menu' : 'Open menu'}
        ></HIcon>
        {showInfoMenu ? <NavInfo /> : ''}
      </HIconContainer>
    </HContainer>
  )
}
