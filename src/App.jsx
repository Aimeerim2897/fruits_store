//react-router-dom
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import ShopSingle from './pages/ShopSingle/ShopSIngle';
import Cart from './pages/Cart/Cart';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path='/shopSingle' element={<ShopSingle/>} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App