import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import './App.css'

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
