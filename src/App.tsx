import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Contacts from './components/Contacts.tsx';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

const App = () => {
    return (
      <BrowserRouter>
      <nav>
        <NavLink to="/" className={({isActive}) => (isActive ? 'link activeLink' : 'link')}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? 'link activeLink' : 'link')}>About</NavLink>
        <NavLink to="/contacts" className={({isActive}) => (isActive ? 'link activeLink' : 'link')}>Contacts</NavLink>
      </nav>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;