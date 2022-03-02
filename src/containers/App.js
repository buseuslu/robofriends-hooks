import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import NotFound from '../components/Errors/NotFound'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' exact={true} element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
