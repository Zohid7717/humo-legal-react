import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAuthMe, selectIsAuth } from './services/redux/slices/auth'

import Header from './components/layout/header/header'
import Footer from './components/layout/footer/Footer'
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import AdminReviews from './pages/admin/adminReviews/AdminReviews'
import AdminServices from './pages/admin/adminServices/AdminServices'
import AdminNews from './pages/admin/adminNews/AdminNews'
import FullCard from './components/ui/fullCard/FullCard'
import AdminStaff from './pages/admin/adminStaff/adminStaff'
import AdminRequest from './pages/admin/adminRequest/adminRequest'
import AdminQuestion from './pages/admin/adminQuestions/adminQuestions'
import About from './pages/about/About'
import Service from './pages/service/Service'
import Press from './pages/press/Press'

import './App.scss'

function App() {
  const [mobileMenu, setMobileMenu] = useState(true);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchAuthMe())
    
  }, []);

  return (
    <>
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <div className="app__routers">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminreviews' element={<AdminReviews />} />
          <Route path='/adminservices' element={<AdminServices />} />
          <Route path='/adminstaff' element={<AdminStaff />} />
          <Route path='/adminnews' element={<AdminNews />} />
          <Route path='/adminrequest' element={<AdminRequest />} />
          <Route path='/adminquestion' element={<AdminQuestion />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/press' element={<Press />} />
          <Route path='/press/:id' element={<FullCard />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
