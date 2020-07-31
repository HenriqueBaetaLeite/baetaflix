import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/';

const img = 'https://fontmeme.com/permalink/200731/b3d6c734656518082f5bc3807743e54c.png';

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={img} alt="BaetaFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
};

export default Menu;
