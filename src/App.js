import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './views/Error';
import Home from './views/Home';
import MyWork from './views/MyWork';
import Footer from './views/sections/Footer';
import Navbar from './views/sections/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-work/:section" element={<MyWork />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
