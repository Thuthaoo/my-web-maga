import React from 'react';

import LogoWrapper from './Logo.styles';

import { ReactComponent as LogoSvg } from '../../assets/image/mangatoon.svg';

const Logo = ({ style = {} }) => (
  <LogoWrapper style={style} className="logo">
    <a href="/home">
      <LogoSvg />
    </a>
  </LogoWrapper>
);

export default Logo;
