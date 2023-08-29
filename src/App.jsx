//react-router-dom
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Blog from './pages/Blog/Blog';
import ShopSingle from './pages/ShopSingle/ShopSIngle';
import ShopBlog from './pages/shop-blog/ShopBlog';
import Fault from './pages/Fault/fault';
import HomePages from './pages/HomePage/HomePages';
import Cart from './pages/Cart/Cart';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePages/>} />
          <Route index element={<h1>Home Page</h1>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/shopSingle' element={<ShopSingle/>} />
          <Route path='/shop' element={<ShopBlog/>} />
          <Route path='/page-not-found' element={<Fault />} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App