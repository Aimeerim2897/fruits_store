//react-router-dom
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePages from './pages/HomePage/HomePages';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePages/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App