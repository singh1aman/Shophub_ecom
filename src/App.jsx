
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import CategoryPLP from './pages/CategoryPLP'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/audioPLP" element={<CategoryPLP productCategory={'Audio'}/>}/>
        <Route path="/wearableplp" element={<CategoryPLP productCategory={'Wearable'}/>}/>
        <Route path="/gamingplp" element={<CategoryPLP productCategory={'Gaming'}/>}/>
        <Route path="/photographyplp" element={<CategoryPLP productCategory={'Photography'}/>}/>
        <Route path="/product/:id" element={<ProductDetailPage />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
