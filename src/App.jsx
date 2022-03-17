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
import ProfilePayment from './pages/Profile/Payment'
import Project from './pages/Profile/Project'
import Coin from './pages/Profile/Coin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="danh-sach-khoa-hoc" element={<Course />} />
          <Route path="hop-tac" element={<Cooperate />} />
          <Route path="khoa-hoc/detail" element={<CourseDetail />} />
          <Route path="ca-nhan" element={<Profile />}>
            <Route index element={<Info />}/>
            <Route path="khoa-hoc" element={<ProfileCourse />}/>
            <Route path="du-an" element={<Project />}/>
            <Route path="thanh-toan" element={<ProfilePayment />}/>
            <Route path="coin" element={<Coin />}/>
          </Route>
          <Route path="thanh-vien" element={<Team />} />
          <Route path="thanh-toan" element={<Payment />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
