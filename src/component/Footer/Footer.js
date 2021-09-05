import React from 'react';
import Wraper from './Footer.style'

import footer1 from '../../assets/image/footer1.png';
import footer2 from '../../assets/image/footer2.png';
import phone12 from '../../assets/image/phone12.png'
import { Aperture, Facebook, Mail } from 'react-feather';


const Footer = () => {
  return (
 <Wraper>
     <div>
         <div className='footer-title'>TẢI ỨNG DỤNG</div>
         <div className='footer-content'>
            <img alt='icon1' src={footer1} className='icon1' width={200} height={50}/>
            <img alt='icon2' src={footer2} className='icon2' width={200} height={50}/>
         </div>
         <div className='footer-title'>LIÊN HÊ</div>
         <div className='footer-content'>
            <div className='footer-content-item'>
                <div className='facebook'>
                    <Facebook size={20} color='#e85d79'/>
                </div>
                <div>Cộng đồng Webmi</div>
             </div>
             <div className='footer-content-item'>
                <Mail size={20} color='#fff'/>
                <div>wecomi.support@gmail.com</div>
             </div>
             <div className='footer-content-item'>
                <Aperture size={20} color='#fff'/>
                <div>Wecomi_BeautyArt</div>
             </div>
         </div>
     </div>
     <img className='image-top-trend image-phone' alt={'phone12'} src={phone12} width={500} height={400}/>
 </Wraper>
  );
};

export default Footer;
