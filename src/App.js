import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from 'views/Login/Login'
import Home from 'views/Home/Home'

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
