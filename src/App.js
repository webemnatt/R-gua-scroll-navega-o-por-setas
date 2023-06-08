import React, { useRef } from 'react';

import './style.scss';

export default function App() {
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = containerRef.current;
    const startPosition = e.clientX;
    const scrollPosition = container.scrollLeft;

    const handleMouseMove = (e) => {
      const delta = e.clientX - startPosition;
      container.scrollLeft = scrollPosition - delta;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleLeftButtonClick = () => {
    const container = containerRef.current;
    container.scrollLeft -= 100;
  };

  const handleRightButtonClick = () => {
    const container = containerRef.current;
    container.scrollLeft += 100;
  };

  return (
    <div className="pregnancy-ruler-container">
      <div className="pregnancy-ruler-container__title">
        Gravidez semana a semana:
      </div>
      <div className="pregnancy-ruler-scroll-container">
        <div
          className="arrows-navigation"
          onClick={handleLeftButtonClick}
          onMouseDown={handleMouseDown}
          id="leftButton"
        >
          <svg
            width="18"
            height="62"
            viewBox="0 0 18 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L2.30186 25.697C0.566041 28.6136 0.566041 33.3864 2.30186 36.303L17 61"
              stroke="#67A49F"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div
          className="pregnancy-ruler-scroll-container__ref"
          ref={containerRef}
        >
          <div className="pregnancy-ruler-scroll-container__scrollable">
            {Array.from({ length: 41 }).map((_, index) => (
              <>
                <a className="pregnancy-week-card" href="http://www.google.com">
                  <div className="pregnancy-week-card__text">
                    <div className="pregnancy-week-card__text__number">
                      {index + 2}
                    </div>
                    <p className="pregnancy-week-card__text__weeks">Semanas</p>
                    <p className="pregnancy-week-card__text__pregnancy">
                      de gravidez
                    </p>
                  </div>
                  <div className="right">
                    <img
                      alt="ilustração do espermatozóides em torno do óvulo"
                      data-src="https://assets.babycenter.com/ims/2021/03/fruit-week-2.svg"
                      class="lazy mui-style-hmtg8 es0q0or0 entered loaded"
                      data-ll-status="loaded"
                      src="https://assets.babycenter.com/ims/2021/03/fruit-week-2.svg"
                    />
                  </div>
                </a>
              </>
            ))}
          </div>
        </div>
        <div
          className="arrows-navigation"
          onClick={handleRightButtonClick}
          onMouseDown={handleMouseDown}
          id="rightButton"
        >
          <svg
            width="18"
            height="62"
            viewBox="0 0 18 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 61L15.6981 36.303C17.434 33.3864 17.434 28.6136 15.6981 25.697L1 1"
              stroke="#67A49F"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
