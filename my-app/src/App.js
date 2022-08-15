import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import StockPage from './stockPage/StockPage';
import SearchPage from './searchPage/SearchPage';
import NavBar from './navBar/NavBar';

const App = () => {
  return (
    < >
      <Routes>
        <Route path="/" element={<NavBar/>} />
        <Route path="stock/:symbol" element={<StockPage/>} />
        <Route path="searchPage/:q" element={<SearchPage/>} />
      </Routes>
    </>
  )
}

export default App