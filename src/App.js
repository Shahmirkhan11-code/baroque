// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import Home from './page_components/Home';
import Header from './sub_components/Header';
import Foot from './sub_components/Foot';
import About from './page_components/About';
import Top from './sub_components/Top';
// import Unstitch from './page_components/Unstitchcol';
import Unstitchcol from './page_components/Unstitchcol';
import Productdetail from './page_components/Productdetail';
// import FormDetail from './sub_components/FormDetail';
import Formdetail from './page_components/Formdetail';

function App() {
  return (
   <BrowserRouter>
   <Top/>
    <Header />
   <Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/About' element={<About/>} /> 
    <Route path='/Unstitch' element={<Unstitchcol/>} /> 
    <Route path='/Productdetail' element={<Productdetail/>}/>
    <Route path='/Formdetail' element={<Formdetail/>}/>
   </Routes>
   <Foot/>
   </BrowserRouter>
  );
}

export default App;
