
  import { Routes,Route, ScrollRestoration, useLocation } from 'react-router-dom'
  import './App.css'
  import Header from './components/header/Header'
  import Footer from './components/footer/Footer'
  import HomePage from './pages/HomePage'
  import CartPage from './pages/CartPage'
  import ProductListingPage from './pages/ProductListingPage'
  import ProductDetailPage from './pages/ProductDetailPage'
import MotionNavbar from './components/header/MotionNavbar'
import { useEffect } from 'react'
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
  function App() {

    return (
      <div className="App">
        {/* <Header /> */}
        <MotionNavbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/audioPLP" element={<ProductListingPage productCategory={'Audio'}/>}/>
          <Route path="/wearableplp" element={<ProductListingPage productCategory={'Wearable'}/>}/>
          <Route path="/gamingplp" element={<ProductListingPage productCategory={'Gaming'}/>}/>
          <Route path="/photographyplp" element={<ProductListingPage productCategory={'Photography'}/>}/>
          <Route path="/allPlp" element={<ProductListingPage productCategory={'all'}/>}/>
          <Route path="/product/:id" element={<ProductDetailPage />}/>
        </Routes>
        <Footer />
      </div>
    )
  }

  export default App
