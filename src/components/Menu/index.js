import React from 'react';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/';

const img = 'https://fontmeme.com/permalink/200728/d8758b699cc0d839f77dd397edc0b8f3.png';

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={img} alt="BaetaFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
};

export default Menu;
