import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import PersonalTraining from './pages/PersonalTraining/PersonalTraining'
import './App.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GroupClasses from './pages/GroupClasses/GroupClasses'
import Membership from './pages/Membership/Merbership'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/personal-training">
            <PersonalTraining/>
          </Route>
          <Route path="/group-classes">
            <GroupClasses/>
          </Route>
          <Route path="/membership">
            <Membership/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
