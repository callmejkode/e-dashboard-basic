import Nav from './components/Nav'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<h1>Product listing component will be displayed</h1>}/>
        <Route path='/add' element={<h1>Product Adding component will be displayed</h1>}/>
        <Route path='/update' element={<h1>Product Update component will be displayed</h1>}/>
        <Route path='/logout' element={<h1>logout component will be displayed</h1>}/>
        <Route path='/profile' element={<h1>Profile component will be displayed</h1>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      

    </div>
  );
}

export default App;
