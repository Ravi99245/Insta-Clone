import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import './App.css'

class App extends Component {
  state = {}

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    )
  }
}

export default App
