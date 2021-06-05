import React, { useEffect, useState } from 'react'
import Header from 'components/Header/Header'
import TasksDashboard from 'components/TaksDashboard/TasksDashboard'
import { log } from 'utils/functions/log'

export default function Home() {
  const [userName] = useState(localStorage.getItem('userName'))

  log(userName)

  return (
    <section>
      <Header username={userName} />
      <TasksDashboard />
    </section>
  )
}
