import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import stylesmod from '../../styles/pages/landingpage/Landingpage.module.scss';

// import { Link, useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import ClimbingMan from '../svgs/items/ClimbingMan';

const Landingpage = () => {
  const [btnClicked, setBtnClicked] = useState(-100);
  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoad(true);
    }, 2085);
  }, []);

  const router = useRouter();
  const styles = useSpring({
    loop: { reverse: true },
    // config: { duration: 2000 },
    from: { translateY: pageLoad ? -200 : -800 },
    to: { translateY: btnClicked },
    config: { friction: 55 },
  });

  /*   const handleHover = (e) => {
    setHoverStatus(40);
    console.log(e);
  };
  const handleHoverLeave = () => {
    setHoverStatus(0);
    console.log('HEYT');
  }; */

  const handleClick = () => {
    setBtnClicked(-750);
    setTimeout(() => {
      router.push('/signup');
    }, 1000);
  };

  return (
    <main className={stylesmod.landingpage_wrapper}>
      {/* <section className='climbing-wrapper'> */}
      {/*       <ClimbingManComp btnClickedStyled={btnClicked}>
        <ClimbingMan className='climbing-man' />
      </ClimbingManComp> */}
      <animated.div
        /*         onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={() => handleHoverLeave()} */
        style={{
          transformOrigin: 'top left',
          left: '50%',
          position: 'absolute',
          cursor: 'pointer',
          ...styles,
        }}
      >
        <ClimbingMan
          draggable='true'
          dragenter={() => console.log('HEY')}
          className={stylesmod.ClimbingMan}
        />
      </animated.div>
      {/* </section> */}

      <section className={stylesmod.text_n_btn_wrapper}>
        <h1>The Adventure Starts Here</h1>
        <p>
          Connect with your family, friends and people around the world. A place
          to share adventures, stories and your everyday life.
        </p>
        <button to='/signup' onClick={() => handleClick()}>
          Let's Begin
        </button>
      </section>
    </main>
  );
};

export default Landingpage;
