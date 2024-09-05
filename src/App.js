import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Banner from './components/Banner';
import SpecialMenu from './components/SpecialMenu';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Contact from './components/Contact';
import BookTable from './components/BookTable';
import About from './components/About';

function HomeLayout() {
  return (
    <>
      <Hero />
      <Banner />
      <SpecialMenu />
    </>
  );
}

function App() {
  return (
    <Router>
      <NavBar /> // If you want NavBar to appear on every page
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookatable" element={<BookTable />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;