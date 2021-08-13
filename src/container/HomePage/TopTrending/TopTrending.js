import React from 'react';
import TopTrendingWrapper from './TopTrending.style';
import topthinhhanh1 from '../../../assets/image/topthanhhanh1.jpg';
import topthinhhanh2 from '../../../assets/image/topthinhhanh2.jpg';
import topthinhhanh3 from '../../../assets/image/topthanhhanh3.jpg';
import { Eye,FileText } from 'react-feather';
const TopTrending = () => {
    const data=[{id:1,image:topthinhhanh1,title:'ngôi trường cá biệt',link:"Học đường • Hài hước",total_chap:40,view:'12.3'}
                ,{id:2,image:topthinhhanh2,title:'ngôi trường cá biệt',link:"Nữ cường • Tình yêu",total_chap:56,view:'23.5'},
                {id:3,image:topthinhhanh3,title:'ngôi trường cá biệt',link:"Xuyên không • Drama",total_chap:75,view:'30'},
                {id:4,image:topthinhhanh1,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
                {id:5,image:topthinhhanh1,title:'ngôi trường cá biệt',link:"Đam mỹ • Kịch tính",total_chap:23,view:'20'}]
  return (
      <TopTrendingWrapper >
          <div className='title'>
            <div>Top thịnh hành</div>
          </div>
          <div className='top-trending'>{data.map((item,index)=>(<div className='item'>
              <img className='image-top-trend' alt={`name-im-${index}`} src={item.image} width={300} height={400}/>
              <div className='information'>
                  <div className='view'>
                    <Eye size={15}/>
                    <div>{item.view} k</div>
                    </div>
                  <div className='total-chap'>
                    <FileText size={15}/>
                    <div>{item.total_chap} chap</div>
                    </div>
              </div>
              <div className='item-title'>{item.title}</div>
              <div className='item-link'>{item.link}</div>
          </div>))}</div>
          
    </TopTrendingWrapper>
  );
};

export default TopTrending;
