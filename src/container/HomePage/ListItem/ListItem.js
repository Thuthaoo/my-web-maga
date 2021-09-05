import React from 'react';
import ListItemWrapper from './ListItem.style';

import { Eye,FileText } from 'react-feather';
const ListItem = ({Data,link}) => {
   
  return (
      <ListItemWrapper >
          <div className='title'>
            <div>{Data?.title}</div>
            <a className='link-navigate' href={link}>Xem tất cả</a>
          </div>
          <div className='top-trending'>{Data?.data.map((item,index)=>(<div className='item'>
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
          
    </ListItemWrapper>
  );
};

export default ListItem;
