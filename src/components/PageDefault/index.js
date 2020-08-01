import React, { Fragment } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  padding: 0;
  ${({ paddingAll }) => css`
    padding: paddingAll;
  `}
`;

const PageDefault = ({ children, paddingAll }) => (
  <Fragment>
    <Menu />
    <Main paddingAll={paddingAll}>{children}</Main>
    <Footer />
  </Fragment>
);

export default PageDefault;
