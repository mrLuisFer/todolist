import React, { useState } from 'react'
import Nav from 'components/Nav/Nav'

export default function Home() {
  const [userName, setUserName] = useState(localStorage.getItem('userName'))

  return (
    <section>
      <Nav />
      <p>{userName}</p>
    </section>
  )
}
