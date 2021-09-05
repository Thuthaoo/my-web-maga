import styled from 'styled-components';

export default styled.div`
    padding: 0px 100px;
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
    width: 160px;
    top: 260px;

    .view,.total-chap{
        display: flex;
        align-items: center;
    }
    }
`;
