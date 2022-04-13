import { Routes, Route, Link } from 'react-router-dom'
import Layout from './Layouts/Layout';
import Home from './Pages/Home/Home';
import Car from './Pages/Car/Car';
import Checkout from './Pages/Checkout/Checkout'
import Transfer from './Pages/Transfer/Transfer';

function App() {
  return (
    <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/car/:id" element={<Car/>}/>
            <Route path="/checkout/:id" element={<Checkout/>}/>
            <Route path="/transfer/:id" element={<Transfer/>}/>
          </Routes>
        </Layout>
    </>
  );
}

export default App;
