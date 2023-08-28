//react-router-dom
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePages from './pages/HomePage/HomePages';
import ShopSingle from './pages/ShopSingle/ShopSIngle';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePages/>} />
          <Route index element={<h1>Home Page</h1>} />
          <Route path='/shopSingle' element={<ShopSingle/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App