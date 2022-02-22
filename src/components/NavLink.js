import { Link } from 'react-router-dom';


const NavLink = () => {
  return ( 
    <header>
      <h1>BookStore CMV</h1>
      <nav>
      <Link className='links' to="/"> BookStore</Link>
      <link className='categories' to="/categories">Categories</link>
      </nav>
    </header>

   );
}
 
export default NavLink;