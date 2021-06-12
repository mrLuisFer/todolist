import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from 'components/Header/Header'
import TasksDashboard from 'components/TaksDashboard/TasksDashboard'
import { log } from 'utils/functions/log'

export default function Home() {
  const [userName, setUserName] = useState(localStorage.getItem('userName'))
  const history = useHistory()

  log(userName)

  if (userName === null || userName === undefined) {
    history.push('/')
  }

  useEffect(() => {
    const usernameChecked = localStorage.getItem('userName')
    if (usernameChecked !== null) {
      setUserName(usernameChecked)
    }
    return null
  }, [])

  return (
    <section>
      <Header username={userName} />
      <TasksDashboard />
    </section>
  )
}
