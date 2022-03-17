import MainLayout from './layouts/MainLayout'
import Course from './pages/Course'
import Home from './pages/Home'
import Cooperate from './pages/Cooperate'
import CourseDetail from './pages/CourseDetail'
import Page404 from './pages/Page404'
import Profile from './pages/Profile'
import Team from './pages/Team'
import Payment from './pages/Payment'

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
        {/* <Course /> */}
        {/* <Cooperate /> */}
        {/* <CourseDetail /> */}
        {/* <Page404 /> */}
        {/* <Profile /> */}
        {/* <Team /> */}
        {/* <Payment /> */}
      </MainLayout>

    </div>
  )
}

export default App
