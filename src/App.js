import { Routes, Route, Link } from 'react-router-dom'
import CarContext from './Contex/CarContext';
import Layout from './Layouts/Layout';
import Home from './Pages/Home/Home';
import Cari from './Pages/Cari/Cari';

function App() {
  return (
    <>
      {/* <CarContext.Provider> */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/cari" element={<Cari/>}/> */}
          </Routes>
        </Layout>
      {/* </CarContext.Provider> */}
    </>
  );
}

export default App;
