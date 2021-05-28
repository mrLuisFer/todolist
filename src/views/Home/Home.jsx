import React, { useState } from 'react'
import Header from 'components/Header/Header'
import TasksDashboard from 'components/TaksDashboard/TasksDashboard'

export default function Home() {
  const [userName] = useState(localStorage.getItem('userName'))

  return (
    <section>
      <Header username={userName} />
      <TasksDashboard />
    </section>
  )
}
