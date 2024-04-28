import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Contacts, Menu } from './components/index.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
