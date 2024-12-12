import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/view/Home'
import About from './components/view/About'
import Faq from './components/view/Faq'
import Howit from './components/view/Howit'
import Services from './components/view/Services'
import WhyUs from './components/view/WhyUs'
import Testimonials from './components/view/Testimonials';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/howit' element={<Howit/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/whyus' element={<WhyUs/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
