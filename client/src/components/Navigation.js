import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <nav className='Navigation' style={{ marginTop: '5vh' }}>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginLeft: '40vw',
        }}
      >
        <li
          style={{
            listStyle: 'none',

            fontWeight: '600',
          }}
        >
          <Link to='/components/Sneakers'>
            <a href='#'> Sneakers </a>
          </Link>
        </li>
        <li>
          <Link to='/components/MyCustom'>
            <a href='#'> My Custom </a>
          </Link>
        </li>
        <li>
          <Link to='/components/Description'>
            <a href='#'> Description </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
