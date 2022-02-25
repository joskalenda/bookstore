/* eslint-disable react/jsx-key */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
// eslint-disable-next-line import/extensions
import Homepage from './components/Homepage';
import Categories from './redux/categories/categories';

function App() {
  return (
    <BrowserRouter>
      <NavLink />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
