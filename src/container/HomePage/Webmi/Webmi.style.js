import styled from 'styled-components';

export default styled.div`
    padding: 0px 175px;
    margin: 50px;
    .top-trending{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 50px 0px;
        .item-title{
            margin-top: 10px;
            font-size: 20px;
            font-weight: 600;
        }
        .item-link{
            color: #999999;
        }
    }
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
    .item{
        position:relative;
    }
    .information{
        background-color:#999999;
        display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 20px;
    border-radius: 8px;
    opacity: 0.8;
    position: absolute;
    top: 210px;
    width: 360px;

    .view,.total-chap{
        display: flex;
        align-items: center;
    }
    }
`;
