import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Desenvolvido por{' '}
        <a
          rel="nofollow noreferrer noopener"
          href="https://www.linkedin.com/in/henrique-ba%C3%AAta-leite-785a4b15a/"
          target="_blank"
        >
          Henrique Baêta Leite
        </a>
      </p>
      <a
        rel="nofollow noreferrer noopener"
        href="https://www.instagram.com/pizzacrekburitis/"
        target="_blank"
      >
        Pizza Crek
      </a>
    </FooterBase>
  );
}

export default Footer;
