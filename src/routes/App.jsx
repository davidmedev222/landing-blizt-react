import { BrowserRouter, Route, Routes } from 'react-router-dom' // COMPONENTS
import { HomePage } from '../pages/home/HomePage' // COMPONENT

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
