import React, { useState } from 'react'

import {
  LoginTopContentStyled,
  LoginTopTitle,
  LoginSecreteMsg,
  LoginSecreteMsgButton,
} from './LoginTopContent.styles'

export default function LoginTopContent() {
  const [isSecretMsg, setIsSecretMsg] = useState(false)

  const handleSecreteMsg = () => setIsSecretMsg(!isSecretMsg)

  const closeSecretMsg = () => setIsSecretMsg(false)

  return (
    <LoginTopContentStyled>
      <LoginTopTitle aria-hidden onClick={handleSecreteMsg}>
        Welcome to the mrLuisFer's todo list!
      </LoginTopTitle>
      {isSecretMsg ? (
        <LoginSecreteMsg>
          <p>
            This is a Todo created by LuisFer, adapted to the needs it represents as
            Developer & Student. Obviously I could use already created
            <br />
            But why not?
          </p>
          <LoginSecreteMsgButton type='button' onClick={closeSecretMsg}>
            Close message
          </LoginSecreteMsgButton>
        </LoginSecreteMsg>
      ) : (
        ''
      )}
    </LoginTopContentStyled>
  )
}
