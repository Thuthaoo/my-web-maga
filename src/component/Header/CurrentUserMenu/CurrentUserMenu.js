import React from 'react';



import MenuWrapper from './CurrentUserMenu.styles';




const CurrentUserMenu = () => {

  return (
    <MenuWrapper>
       <>
            <li>
            <a href="url">Profile</a>
            </li>
            <li>
            <a href="url">Sign in</a>
            </li>
            <li>
            <a href="url">Sign out</a>
            </li>
          </>
     
    </MenuWrapper>
  );
};

export default CurrentUserMenu;
