import styled from 'styled-components';

export default styled.div`
/* Slideshow */

.slideshow {
  margin: 0 auto;
  overflow: hidden;
}

.slideshowSlider {
  white-space: nowrap;
  transition: ease 1000ms;
}

.slide {
  display: inline-block;
  background-repeat:round;
  height: 600px;
  width: 100%;
  background-size: 100%;
  .slice-show-detail{
    width: 50%;
    height: 100%;
    margin-left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    &>div{
        width: 50%;
    }
    .title-slice{
        color: #fff;
        font-size: 40px;
        font-weight:500;
        font-style: italic;
        font-family: system-ui;
        overflow: hidden;
    white-space: break-spaces;
    word-break: break-word;
    text-align: center;
    }
    .button-slice{
        margin-top:115px;
        display: flex;
        align-items: center;
        justify-content: center;
        .go-to-detail,.go-to-read{
            width: 175px;
            height: 40px;
            border-radius: 20px;
        }
        .go-to-detail{
            margin-right: 10px;
            border: 1px solid #fff;
            font-weight:600;
            color: #fff;
            background-color: transparent;
        }
        .go-to-read{
                margin-left: 10px;
                border: 1px solid #fff;
                background-color: #fff;
                color: #C96186;
                font-weight:600;
        }
    }
  }
}

/* Buttons */

.slideshowDots {
  text-align: center;
}

.slideshowDot {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 7px 0px;

  background-color: #c4c4c4;
}

.slideshowDot.active {
  background-color: #6a0dad;
}
`;
