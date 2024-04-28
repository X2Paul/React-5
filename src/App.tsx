import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Contacts from './components/Contacts.tsx';
import Menu from './components/Menu.tsx';


const App = () => {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;