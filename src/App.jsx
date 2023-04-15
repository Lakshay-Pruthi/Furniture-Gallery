
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Main from './Pages/Main'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import About from './Pages/About'
import Category from './Pages/Category'
import { useEffect, useState } from 'react'
import Wishlist from './Pages/Wishlist'


function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://course-api.com/react-store-products');
      const productsData = await response.json();
      setData(productsData);
    }
    fetchData();
  }, [])



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Furniture-Gallery/' element={<Main />} >
          <Route path='Home' element={<Home Data={data} />} />
          <Route index path='About' element={<About />} />
          <Route path='Wishlist' element={<Wishlist />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='product/:productIndex' element={<Product Data={data} />} />
          <Route path='Category/:type' element={<Category Data={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
