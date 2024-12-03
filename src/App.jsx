import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './assets/Layout/LayoutOne'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Contact from './assets/Pages/Contact'
import Projects from './assets/Pages/Projects'
import LayoutTwo from './assets/Layout/LayoutTwo'
import Works from './assets/Pages/Works'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='/layout-two' element={<LayoutTwo/>}>
          <Route path='/layout-two/projects' element={<Projects/>}/>
          <Route path='/layout-two/works' element={<Works/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
