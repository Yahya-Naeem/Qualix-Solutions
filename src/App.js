import { Route, Routes} from 'react-router-dom';
import './App.css';
import {Home ,
Footer,
Navbar,
About,
Contact} from './Components/index';

function App() {
  return (
    <div className='App'>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
      <Footer />
    </div>
  );
}
export default App;
