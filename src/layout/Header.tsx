import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <li>
          <Link to={`/`}>Welcome</Link>
        </li>
        <li>
          <Link to={`editor`}>Editor</Link>
        </li>
        <li>
          <Link to={`auth`}>Auth</Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
