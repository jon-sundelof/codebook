import styled, { keyframes } from 'styled-components';
/* 
const updown = keyframes`
  0% {
      transform: translateY(-150px);
  }

  25% {
      transform: translateY(-200px);
  }

  50%{
      transform: translateY(-250px);
  }
  75%{
      transform: translateY(-200px);
  }
  100%{
    transform: translateY(-150px);
  }
`; */
const updown = keyframes`
  0% {
      transform: translateY(-150px);
  }

  100%{
    transform: translateY(${(props) => props.btnClickedStyled}px);
  }


`;

export const ClimbingManComp = styled.section`
  /* display: flex;
  justify-content: center; */
  /* width: 100%; */
  position: absolute;
  /* padding: 1rem; */
  top: -25px;
  left: 50%;
  /* transition: updown 4s linear; */
  /* transform: translateY(-850px); */
  /*  animation: ${updown} 12s linear infinite; */
  /* animation: ${(props) => props.btnClickedStyled}; */
  /* animation: ${updown} 12s linear infinite; */
`;
