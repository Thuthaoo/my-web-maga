import styled from 'styled-components';

export default styled.div`
    position: relative;
    margin-top: 150px;
    padding: 50px 150px 50px 150px;
    background-color: #e85d79;
  background-image: linear-gradient(to right, #e85d79 , #c5567a);
 .footer-content{
     display: flex;
     align-items: center;
     margin-bottom: 20px;
 }
 .footer-content-item{
     display: flex;
     align-items: center;
     font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin-left: 100px;
    &:first-child{
        margin-left: 0px!important;
    }
    &>div{
        &:last-child{
            margin-left: 15px;
        }
    }
 }
 .facebook{
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .footer-content-item-1{
     display: flex;
     align-items: center;
     font-size: 18px;
    font-weight: 600;
    color: #fff;
 }
 .icon1{

 }
 .footer-title{
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
 }
 .icon2{
     margin-left: 50px;
 }
 .image-phone{
    position: absolute;
    top: -94px;
    right: 60px;
 }
`;
