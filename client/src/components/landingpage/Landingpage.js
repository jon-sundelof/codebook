import React, { useState } from 'react';
import '../../styles/Landingpage.css';

import { Link, useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import { ClimbingManComp } from './LandingpageElements';
import ClimbingMan from '../svgs/items/ClimbingMan';

const Landingpage = () => {
  const [btnClicked, setBtnClicked] = useState(-200);
  const [hoverSatus, setHoverStatus] = useState(0);

  let history = useHistory();
  const styles = useSpring({
    loop: { reverse: true },
    config: { duration: 2000 },
    from: { translateY: -100, rotateZ: 0 },
    to: { translateY: btnClicked, rotateZ: hoverSatus },
    // config: { friction: 55 },
  });

  const handleHover = (e) => {
    setHoverStatus(40);
    console.log(e);
  };
  const handleHoverLeave = () => {
    setHoverStatus(0);
    console.log('HEYT');
  };

  const handleClick = () => {
    setBtnClicked(-850);
    setTimeout(() => {
      history.push('/signup');
    }, 1500);
  };

  return (
    <main className='landingpage-wrapper'>
      {/* <section className='climbing-wrapper'> */}
      {/*       <ClimbingManComp btnClickedStyled={btnClicked}>
        <ClimbingMan className='climbing-man' />
      </ClimbingManComp> */}
      <animated.div
        onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={() => handleHoverLeave()}
        style={{
          transformOrigin: 'top left',
          left: '50%',
          position: 'absolute',
          cursor: 'pointer',
          ...styles,
        }}
      >
        <ClimbingMan className='climbing-man' />
      </animated.div>
      {/* </section> */}

      <section className='text-n-btn-wrapper'>
        <h1>The Adventure Starts Here</h1>
        <p>
          {' '}
          Connect with your family, firends and people around the world. A place
          to share adventures, stories and your everyday life.{' '}
        </p>
        <button to='/signup' onClick={() => handleClick()}>
          Let's Begin
        </button>
      </section>
    </main>
  );
};

export default Landingpage;
