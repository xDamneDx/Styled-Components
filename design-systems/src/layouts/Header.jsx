import React from 'react';
import styled from 'styled-components';
import { social, elevation, fixed } from '../utilities';
import logo from '../logo.svg';

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
  </header>
);

export default styled(Header)`
  background: ${social.facebook};
  padding: 10px 5%;
  width: 100%;
  ${elevation[2]};
  ${fixed()};

  .logo {
    width: 60px;
  }
`;
