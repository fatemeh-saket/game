import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from '../views/pages/StartPage'
import GamePage from '../views/pages/GamePage.jsx'
import RulePage from '../views/pages/RulePage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/game/:players' element={<GamePage />} />
        <Route path='/rules' element={< RulePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router