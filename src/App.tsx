import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TntShowcase from './components/TntShowcase'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <MainContent />
            <Footer />
          </>
        } />
        <Route path="/think-n-tinker" element={<TntShowcase />} />
      </Routes>
    </Router>
  )
}

export default App
