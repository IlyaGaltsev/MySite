import { Route, Routes,  } from 'react-router-dom'
import { publicRoutes } from '../router'
import '../publicStyles.css'
import './App.css'

function App() {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={Component}
        />
      ))}
    </Routes>
  )
}

export { App }
