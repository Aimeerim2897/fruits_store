//react-router-dom
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Home Page</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App