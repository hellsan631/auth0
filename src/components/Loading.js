import styled from 'styled-components'

const Loading = styled.div`
  width: 50px;
  height: 50px;
  margin: 4em auto;
  position: relative;

  &:before {
    content: '';
    width: 50px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow .5s linear infinite;
  }

  &:after {
    content: '';
    width: 50px;
    height: 50px;
    background-image: linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%);
    animation: animate 1.9s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    5% {
      border-bottom-right-radius: 3px;
    }
    10% {
      transform: translateY(9px) rotate(22.5deg);
    }
    15% {
      transform: translateY(18px) scale(1, .9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    20% {
      transform: translateY(9px) rotate(67.5deg);
    }
    25% {
      transform: translateY(0) rotate(90deg);
    }

    30% {
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
    }
    35% {
      transform: translateY(9px) rotate(112.5deg);
    }
    40% {
      transform: translateY(18px) scale(1, .9) rotate(135deg);
      border-top-right-radius: 40px;
    }
    45% {
      transform: translateY(9px) rotate(157.5deg);
    }
    50% {
      transform: translateY(0) rotate(180deg);
    }

    55% {
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
    60% {
      transform: translateY(9px) rotate(202.5deg);
    }
    65% {
      transform: translateY(18px) scale(1, .9) rotate(225deg);
      border-top-left-radius: 40px;
    }
    70% {
      transform: translateY(9px) rotate(247.5deg);
    }
    75% {
      transform: translateY(0) rotate(270deg);
    }

    80% {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    85% {
      transform: translateY(9px) rotate(292.5deg);
    }
    90% {
      transform: translateY(18px) scale(1, .9) rotate(315deg);
      border-bottom-left-radius: 40px;
    }
    95% {
      transform: translateY(9px) rotate(357.5deg);
    }
    100% {
      transform: translateY(0) rotate(360deg);
    }
  }


  @keyframes shadow {
    0%, 100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }
`

export default Loading
