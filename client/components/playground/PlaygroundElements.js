import styled from 'styled-components';

export const MovingDog = styled.div`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}%;
  transform: rotateY(${(props) => props.rotate}rad)
    rotateZ(${(props) => props.rotationjump}deg);
  /* transform: rotateX(${(props) => props.rotate}rad); */
  /* transform: rotateZ(180deg); */
  /*   transform: rotateY(0rad); */
  /*  transform: rotateY(3.142rad); */
  transition: all 0.25s linear;
`;
