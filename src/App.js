import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from 'views/Login/Login'

function App() {
  return (
    <main className='App'>
      <Router>
        <Route exact path='/' component={Login} />
      </Router>
    </main>
  )
}

export default App
