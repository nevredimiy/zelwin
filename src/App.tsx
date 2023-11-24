import { Routes, Route, Outlet } from 'react-router-dom'

import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Cases from './pages/Cases';
import Contacts from './pages/Contacts';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='services' element={<Services />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='cases' element={<Cases />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </>
  )
}
export default App

const Layout = () => {
  return (
    <>
      <Header />
      <main className='my-16 flex-auto'>
       <Outlet />
      </main>
      <Footer />
    </>
  )
}
