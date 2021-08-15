import React from 'react';
import HomePageWrapper from './HomePage.style'
import SliceShow from '../../component/SliceShow/SlicewShow';
import TopTrending from './TopTrending/TopTrending';
import Webmi from './Webmi';
import webmi1 from '../../assets/image/machban/image83.png';
import webmi2 from '../../assets/image/machban/image217.png';
import webmi3 from '../../assets/image/machban/image218.png';
import webmi4 from '../../assets/image/machban/maxresdefault1.png';

import moicapnhat1 from '../../assets/image/moicapnhat/moicapnhat1.png';
import moicapnhat2 from '../../assets/image/moicapnhat/moicapnhat2.png';
import moicapnhat3 from '../../assets/image/moicapnhat/moicapnhat3.png';
import moicapnhat4 from '../../assets/image/moicapnhat/moicapnhat4.png';
import moicapnhat5 from '../../assets/image/moicapnhat/moicapnhat5.png';
import moicapnhat6 from '../../assets/image/moicapnhat/moicapnhat6.png';


import ListItem from './ListItem';
import YouKnow from './YouKnow';
const HomePage = () => {

            const Data ={title:'Truyện mới cập nhật',
              data:[{id:1,image: webmi1,title:'ngôi trường cá biệt',link:"Học đường • Hài hước",total_chap:40,view:'12.3'},
                    {id:2,image: webmi2,title:'ngôi trường cá biệt',link:"Nữ cường • Tình yêu",total_chap:56,view:'23.5'},
                    {id:3,image: webmi3,title:'ngôi trường cá biệt',link:"Xuyên không • Drama",total_chap:75,view:'30'},
                    {id:4,image: webmi4,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
            ]}
            const Data1 ={title:'Truyện mới cập nhật',
            data:[{id:10,image: moicapnhat1,title:'ngôi trường cá biệt',link:"Học đường • Hài hước",total_chap:40,view:'12.3'},
                  {id:11,image:moicapnhat2,title:'ngôi trường cá biệt',link:"Nữ cường • Tình yêu",total_chap:56,view:'23.5'},
                  {id:12,image: moicapnhat3,title:'ngôi trường cá biệt',link:"Xuyên không • Drama",total_chap:75,view:'30'},
                  {id:13,image: moicapnhat4,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
                  {id:14,image: moicapnhat5,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
                  {id:15,image: moicapnhat6,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
          ]}

          const Data2 ={title:'Được mong chờ nhiều nhất',
              data:[{id:1,image: webmi1,title:'ngôi trường cá biệt',link:"Học đường • Hài hước",total_chap:40,view:'12.3'},
                    {id:2,image: webmi2,title:'ngôi trường cá biệt',link:"Nữ cường • Tình yêu",total_chap:56,view:'23.5'},
                    {id:3,image: webmi3,title:'ngôi trường cá biệt',link:"Xuyên không • Drama",total_chap:75,view:'30'},
                    {id:4,image: webmi4,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
            ]}
            const Data3 ={title:'Ở nhà cực mê',
            data:[{id:10,image: moicapnhat1,title:'ngôi trường cá biệt',link:"Học đường • Hài hước",total_chap:40,view:'12.3'},
                  {id:11,image:moicapnhat2,title:'ngôi trường cá biệt',link:"Nữ cường • Tình yêu",total_chap:56,view:'23.5'},
                  {id:12,image: moicapnhat3,title:'ngôi trường cá biệt',link:"Xuyên không • Drama",total_chap:75,view:'30'},
                  {id:13,image: moicapnhat4,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
                  {id:14,image: moicapnhat5,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
                  {id:15,image: moicapnhat6,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
          ]}


           
  return (
      <HomePageWrapper >
            <div className='homepage'>
              <SliceShow/>
              <TopTrending/>
              <Webmi Data={Data} link ='/Webmi_all'/>
              <ListItem Data={Data1} link ='/new_update_all'/>
              <YouKnow/>
              <Webmi Data={Data2} link ='/Webmi_all'/>
              <ListItem Data={Data3} link ='/new_update_all'/>
            </div>
    </HomePageWrapper>
  );
};

export default HomePage;
