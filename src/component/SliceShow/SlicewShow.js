import React, { useEffect, useRef, useState} from 'react';

import SliceShowWrapper from './SliceShow.style'
import logo1 from '../../assets/image/anh1.jpg'
import logo5 from '../../assets/image/anh5.png'
import logo4 from '../../assets/image/anh4.png'
const images = [logo5,logo4,logo1];
const delay = 5000;
export default function Slideshow(){
    const [index, setIndex] =useState(0);
    const timeoutRef = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
        <SliceShowWrapper>
        <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((logo, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${logo})` }}
          >
              <div className='slice-show-detail'>
                  <div>
                    <div className='title-slice'>Cô vợ đáng yêu của dịch thiếu</div>
                    <div className='button-slice'>
                            <button className='go-to-detail'> chi tiết</button>
                            <button className='go-to-read'> đọc ngay</button>
                    </div>
                  </div>
              </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
        </SliceShowWrapper>
    )
}
