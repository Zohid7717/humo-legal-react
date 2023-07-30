import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout/MainLayout'
import Home from './pages/home/Home'

import './App.scss'

const Admin = React.lazy(() => import('./pages/admin/Admin'))
const AdminReviews = React.lazy(() => import('./pages/admin/adminReviews/AdminReviews'))
const AdminServices = React.lazy(() => import('./pages/admin/adminServices/AdminServices'))
const AdminStaff = React.lazy(() => import('./pages/admin/adminStaff/adminStaff'))
const AdminNews = React.lazy(() => import('./pages/admin/adminNews/AdminNews'))
const AdminRequest = React.lazy(() => import('./pages/admin/adminRequest/adminRequest'))
const AdminQuestion = React.lazy(() => import('./pages/admin/adminQuestions/adminQuestions'))
const About = React.lazy(() => import('./pages/about/About'))
const Service = React.lazy(() => import('./pages/service/Service'))
const Press = React.lazy(() => import('./pages/press/Press'))
const FullCard = React.lazy(() => import('./components/ui/fullCard/FullCard'))
const Contact = React.lazy(() => import('./pages/contact/Contact'))
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'))


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='admin' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <Admin />
            </Suspense>
          } />
          <Route path='adminreviews' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <AdminReviews />
            </Suspense>
          } />
          <Route path='adminservices' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <AdminServices />
            </Suspense>
          } />
          <Route path='adminstaff' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <AdminStaff />
            </Suspense>
          } />
          <Route path='adminnews' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <AdminNews />
            </Suspense>
          } />
          <Route path='adminrequest' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <AdminRequest />
            </Suspense>
          } />
          <Route path='adminquestion' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <AdminQuestion />
            </Suspense>
          } />
          <Route path='about' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <About />
            </Suspense>
          } />
          <Route path='service' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <Service />
            </Suspense>
          } />
          <Route path='press' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <Press />
            </Suspense>
          } />
          <Route path='press/:id' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <FullCard />
            </Suspense>
          } />
          <Route path='contact' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <Contact />
            </Suspense>
          } />
          <Route path='*' element={
            <Suspense fallback={<p className='loading'>Идет загрузка...</p>}>
              <NotFound />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App
