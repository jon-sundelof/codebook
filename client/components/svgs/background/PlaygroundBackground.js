import React from 'react';

const LandingBackground = ({ className }) => {
  return (
    <svg
      className={className}
      width='1440'
      height='1024'
      viewBox='0 0 1440 1024'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
    >
      <g clip-path='url(#clip0)'>
        <rect width='1440' height='1024' fill='white' />
        <rect
          width='1440'
          height='1024'
          fill='url(#paint0_linear)'
          fill-opacity='0.8'
        />
        <path
          d='M209.063 392.001C25.0884 392.501 -13.9837 392.501 -48.022 392.501V399.001L-66 994L1489.09 1003L1944.54 635.501L2056 592.501L1846.26 532.501L1792.32 528.501L1680.86 567.15L1733 715.15L1644.3 807.657L1469.32 811.314C1469.32 811.314 1104.37 826 844.884 807.657C585.402 789.314 693.869 714.501 537.461 635.501C381.052 556.501 393.038 391.501 209.063 392.001Z'
          fill='#FFCE89'
        />
        <path
          d='M195.063 436.001C11.0884 436.501 -27.9837 436.501 -62.022 436.501V443.001L-80 1038L1475.09 1047L1930.54 679.501L2042 636.501L1832.26 576.501L1778.32 572.501L1666.86 611.15L1719 759.15L1630.3 851.657L1455.32 855.314C1455.32 855.314 1090.37 870 830.884 851.657C571.402 833.314 679.869 758.501 523.461 679.501C367.052 600.501 379.038 435.501 195.063 436.001Z'
          fill='#8BC540'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='238.804'
          y1='110.652'
          x2='1205.06'
          y2='559.87'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#92EAFF' />
          <stop offset='0.552083' stop-color='#92EAFF' stop-opacity='0.9' />
        </linearGradient>
        <clipPath id='clip0'>
          <rect width='1440' height='1024' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LandingBackground;
