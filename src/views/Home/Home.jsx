import React, { useState } from 'react'
import Nav from 'components/Nav/Nav'
import TasksDashboard from 'components/TaksDashboard/TasksDashboard'

export default function Home() {
  const [userName] = useState(localStorage.getItem('userName'))

  return (
    <section>
      <Nav username={userName} />
      <TasksDashboard />
    </section>
  )
}
