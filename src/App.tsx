import { Route, Routes } from 'react-router-dom';
import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import TeamPage from './components/pages/TeamPage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team-details' element ={<TeamPage />} />
      </Routes>
    </>
  )
}

export default App
