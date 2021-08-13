import React from 'react';
import HomePageWrapper from './HomePage.style'
import SliceShow from '../../component/SliceShow/SlicewShow';
import TopTrending from './TopTrending/TopTrending';
import Webmi from './Webmi';
const HomePage = () => {


  return (
      <HomePageWrapper >
            <div className='homepage'>
              <SliceShow/>
              <TopTrending/>
              <Webmi/>
            </div>
    </HomePageWrapper>
  );
};

export default HomePage;
