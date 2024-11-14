import './App.css';
import Header from './component/header'
import MainPage from './component/mainPage'
import Footer from './component/footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HasarSorgu from './component/hasarSorgu'

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/'element={<MainPage/>}/>
        <Route path='/hasar-sorgu' element={<HasarSorgu />}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
