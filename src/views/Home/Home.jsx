import React, { useState } from 'react'
import Nav from 'components/Nav/Nav'

export default function Home() {
  const [userName] = useState(localStorage.getItem('userName'))

  return (
    <section>
      <Nav username={userName} />
    </section>
  )
}
