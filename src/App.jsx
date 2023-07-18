import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
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
import './App.scss'
import AdminQuestion from './pages/admin/adminQuestions/adminQuestions'

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);

  return (
    <>
      <Header />
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
          <Route path='/adminnews/:id' element={<FullCard />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
