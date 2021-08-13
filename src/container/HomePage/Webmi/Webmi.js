import React from 'react';
import WebmiWrapper from './Webmi.style';
import webmi1 from '../../../assets/image/machban/image83.png';
import webmi2 from '../../../assets/image/machban/image217.png';
import webmi3 from '../../../assets/image/machban/image218.png';
import webmi4 from '../../../assets/image/machban/maxresdefault1.png';
import { Eye,FileText } from 'react-feather';
const Webmi = () => {
    const data=[{id:1,image: webmi1,title:'ngôi trường cá biệt',link:"Học đường • Hài hước",total_chap:40,view:'12.3'}
                ,{id:2,image: webmi2,title:'ngôi trường cá biệt',link:"Nữ cường • Tình yêu",total_chap:56,view:'23.5'},
                {id:3,image: webmi3,title:'ngôi trường cá biệt',link:"Xuyên không • Drama",total_chap:75,view:'30'},
                {id:4,image: webmi4,title:'ngôi trường cá biệt',link:"Viễn tưởng • Hài hước",total_chap:80,view:'10'},
               ]
  return (
      <WebmiWrapper >
          <div className='title'>
            <div>Webmi mách bạn</div>
          </div>
          <div className='top-trending'>{data.map((item,index)=>(<div className='item'>
              <img className='image-top-trend' alt={`name-im-${index}`} src={item.image} width={400} height={250}/>
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
          
    </WebmiWrapper>
  );
};

export default Webmi;
