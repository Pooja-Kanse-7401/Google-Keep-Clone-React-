import React, { Suspense } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'

const Reminders = React.lazy(() => import('./components/Reminders'))
const Archive = React.lazy(() => import('./components/Archive'))
const EditLabels = React.lazy(() => import('./components/EditLabels'))
const Bin = React.lazy(() => import('./components/Bin'))


function App() {
  return (
    <>
      <div>

        <Suspense fallback={<Loader />}>
          <Router>
            <NavBar />
            <div className='w-[80%] h-[100%] absolute right-0 top-16'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reminders' element={<Reminders />} />
                <Route path='/archive' element={<Archive />} />
                <Route path='/editLabels' element={<EditLabels />} />
                <Route path='/bin' element={<Bin />} />
              </Routes>
            </div>
          </Router>
        </Suspense>
      </div>
    </>
  )
}

export default App
