import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/';

const img = 'https://fontmeme.com/permalink/200729/a24ea23814304562aa4c6016d598b084.png';

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
