import styled from 'styled-components';

export default styled.div`
    padding: 0px 100px;
    margin: 50px;
 
    .title{
        padding: 0px 20px;
        border-left: 5px solid #C96186;
        display: flex;
        vertical-align: bottom;
        align-items: flex-end;
        justify-content: space-between;
        .link-navigate{
          color:  #e85d79;
        }
        &>div{
            font-size: 30px;
            font-weight: 600;
            font-family: ui-sans-serif;
        }
    }
  .item-content{
      display: flex;
      padding: 0px 20px;
      margin: 50px 0px;
      .item-content-one{
          width: 50%;
          -moz-box-shadow: 0px 0px 6px -1px rgba(133, 133, 133, 1);
      -webkit-box-shadow: 0px 0px 6px -1px rgba(133, 133, 133, 1);
      box-shadow: 0px 0px 6px -1px rgba(133, 133, 133, 1);
          &>div{
              padding: 10px 30px;
          }
      }
      .item-content-two{
        padding: 0px 25px;
          width: 50%;
      }
  }
  .item-title{
            margin-top: 10px;
            font-size: 24px;
            font-weight: 600;
        }
        .item-link{
            color: #999999;
        }
        .item-one{
            display: flex;
            align-items:center;
            margin-top: 20px;
            .item{
                display: flex;
            align-items:center;
            font-size: 18px;
            color: #5F5F5F;
            margin-left: 20px;
            &:first-child{
                margin-left: 0px!important;
            }
            }
        }
        .content-item{
            margin-top: 20px;
            color: #7F7F7F;
            font-size: 16px;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: break-spaces;
            word-break: break-word;
            width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
        }
        .item-two{
            margin-top: 40px;

            display: flex;
            align-items: center;
            -moz-box-shadow: 0px 0px 6px -1px rgba(133, 133, 133, 1);
            -webkit-box-shadow: 0px 0px 6px -1px rgba(133, 133, 133, 1);
            box-shadow: 0px 0px 6px -1px rgba(133, 133, 133, 1);
            &:first-child{
                margin-top: 0px!important;
            }
            &>div{
                width: 50%;
                padding: 15px;
            }
        }
`;
