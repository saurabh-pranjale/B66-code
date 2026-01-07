
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NavigationBar from './components/NavigationBar'

function App() {


  return (
    <BrowserRouter>
      <>
      <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
