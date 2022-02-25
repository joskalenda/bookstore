import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import Book from './redux/books/book';
import Categories from './redux/categories/categories';

function App() {
  return (
    <BrowserRouter>
      <NavLink />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
