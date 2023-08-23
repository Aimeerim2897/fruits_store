//react-router-dom
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Blog from './pages/Blog/Blog';
import ShopSingle from './pages/ShopSingle/ShopSIngle';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/shopSingle' element={<ShopSingle/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App