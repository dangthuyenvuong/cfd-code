import MainLayout from './layouts/MainLayout'
import Course from './pages/Course'
import Home from './pages/Home'
import Cooperate from './pages/Cooperate'
import CourseDetail from './pages/CourseDetail'
import Page404 from './pages/Page404'
import Profile from './pages/Profile'
import Team from './pages/Team'
import Payment from './pages/Payment'
import { Route, Routes } from 'react-router-dom'
import Info from './pages/Profile/Info'
import ProfileCourse from './pages/Profile/Course'
import Project from './pages/Profile/Project'
import ProfilePayment from './pages/Profile/Payment'
import Coin from './pages/Profile/Coin'
import axios from 'axios'
import { COURSE_DETAIL_PATH, COURSE_REGISTER_PATH, HOME_PATH, LOGIN_PATH } from './constants/path'
import CourseRegister from './pages/CourseRegister'
import Login from './pages/Login'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    name: 'Đặng Thuyền Vương',
    avatar: 'https://www.cfdtraining.vn/uploads/vuong-cfd.jpg'
  })


  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout user={user}/>}>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path="/khoa-hoc" element={<Course />} />
          <Route path="/lien-he" element={<Cooperate />} />
          <Route path={COURSE_DETAIL_PATH} element={<CourseDetail />} />
          <Route path={COURSE_REGISTER_PATH} element={<CourseRegister />} />
          <Route path={LOGIN_PATH} element={<Login />} />
          <Route path="/ca-nhan" element={<Profile user={user} path="/ca-nhan" />}>
            <Route index element={<Info />} />
            <Route path='khoa-hoc' element={<ProfileCourse />} />
            <Route path='du-an' element={<Project />} />
            <Route path='thanh-toan' element={<ProfilePayment />} />
            <Route path='coin' element={<Coin />} />
          </Route>
          <Route path="/thanh-vien" element={<Team />} />
          <Route path="/huong-dan-thanh-toan" element={<Payment />} />
          <Route path='*' element={<Page404 />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App



/**
 * Context API là gì?
 * Khi nào cần sử dung Context API?
 * 
 * 
 * Setup axios - request, response
 * Làm chức năng authen, JWT
 * Làm chức năng accordion sử dụng Context
 * 
 */