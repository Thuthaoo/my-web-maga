import React from 'react';

import { NavDropdown } from 'react-bootstrap';
import { Settings as SettingsIcon } from 'react-feather';
import Wrapper from './Header.style'
// import CurrentUserMenu from './CurrentUserMenu/CurrentUserMenu';

import NavMenuRight from './NavMenu';
import CurrentUserMenu from './CurrentUserMenu';
import Logo from '../Logo/Logo';



const Header = () => {
  return (
    <>
      <Wrapper>
        <div className={`container focus`}>
          <div className="top-header">
            <div className="group-item-header">
            <Logo />
              <NavMenuRight />
            </div>
            <div className={`nav-custom-menu `}>
              <NavDropdown className="btn-show-user-menu" title={<SettingsIcon size={20} />}>
                <NavDropdown.Item>
                  <CurrentUserMenu />
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* <div className={`container ${endpoint === '/company' ? 'container-company' : ''}`}>
        <Breadcrumb />
      </div> */}
    </>
  );
};

export default Header;
