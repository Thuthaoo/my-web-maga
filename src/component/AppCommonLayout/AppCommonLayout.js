import React from 'react';

import CommonLayoutWrapper from './AppCommonLayout.style';
import Header from '../Header';
import Footer from '../Footer';

const AppCommonLayout = ({ children }) => {
  return (
    <CommonLayoutWrapper>
      <Header />
      {children}
      <Footer/>
    </CommonLayoutWrapper>
  );
};

export default AppCommonLayout;
