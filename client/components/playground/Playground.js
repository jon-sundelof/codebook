import React, { useEffect, useState } from 'react';
import '../../styles/Playground.css';

import { MovingDog } from './PlaygroundElements';

import SvgBackground from '../svgs/background/PlaygroundBackground';
import SunCloud from '../svgs/enviroment/SunCloud';
import Cloud from '../svgs/enviroment/Cloud';
import Sun from '../svgs/enviroment/Sun';
import LargeTree from '../svgs/items/LargeTree';
import MediumTree from '../svgs/items/MediumTree';
import Sign from '../svgs/items/Sign';
import House from '../svgs/items/House';
import Dog from '../svgs/items/Dog';

const Landingpage = () => {
  let left = 800;
  let top = 80;

  const [rotation, setRotation] = useState(3.142);
  const [rotationjump, setRotationJump] = useState(0);

  const [leftdist, setLeftdist] = useState(800);
  const [topdist, setTopdist] = useState(80);

  const handleKeyDown = async (e) => {
    if (e.key == 'ArrowUp') {
      setTopdist(topdist - 1);
    } else if (e.key == 'ArrowLeft') {
      console.log(leftdist);
      setLeftdist(leftdist - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      /* if (e.key == 'ArrowUp') {
        top -= 5;
        setTopdist(top);
      }else if (e.key == 'ArrowBo') {
      } */
      console.log(e.code);
      if (e.key == 'ArrowLeft') {
        left -= 8;
        setLeftdist(left);
        setRotation(0);
      } else if (e.key == 'ArrowRight') {
        left += 8;
        setLeftdist(left);
        setRotation(3.142);
      } else if (e.code == 'Space') {
        if (top == 72) return;
        top -= 8;
        setTopdist(top);
        setRotationJump(30);
        setTimeout(() => {
          top += 8;
          setTopdist(top);
          setRotationJump(0);
        }, 200);
      }

      /* handleKeyDown(e); */
      /* console.log(e.key); */
      /*      if (e.key == 'ArrowUp') {
        let newDist = topdist - 1;
        setTopdist(newDist);
      } else if (e.key == 'ArrowLeft') {
        console.log(leftdist);
      
        setLeftdist(leftdist - 15);
      } */
    });
    return () => {
      /*       window.removeEventListener('keydown'); */
    };
  }, []);

  return (
    <main className='landingpage-wrapper'>
      {/*   <h1 className='sundelof'>sundelof</h1> */}
      <SvgBackground className='svg-background' />
      {/* <SunCloud className='sun-cloud' /> */}
      <Sun className='sun-cloud' />
      <Cloud className='cloud' />
      <LargeTree className='large-tree' />
      <MediumTree className='medium-tree-left' />
      <MediumTree className='medium-tree-right' />
      <House className='house' />
      <Sign className='sign' />
      <MovingDog
        rotationjump={rotationjump}
        rotate={rotation}
        left={leftdist}
        top={topdist}
      >
        <Dog className='dog-left' />
      </MovingDog>
      <Dog className='dog-right' />
    </main>
  );
};

export default Landingpage;
