import { BrowserRouter, Route, Routes } from 'react-router-dom' // COMPONENTS
import { LayoutPages, HomePage, ErrorPage, ServicesPage, ProjectsPage, AboutPage } from '../pages/export'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPages />}>
          <Route index element={<HomePage />} />
          <Route path='services' element={<ServicesPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { App }
