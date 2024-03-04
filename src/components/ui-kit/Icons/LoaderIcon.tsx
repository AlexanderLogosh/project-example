import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const LoaderIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      className="useFill"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none">
      <mask
        id="mask0_108_16495"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="60"
        height="60">
        <rect width="60" height="60" fill="url(#pattern0)" />
      </mask>
      <g mask="url(#mask0_108_16495)">
        <rect width="60" height="60" fill="#999BFF" />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use xlinkHref="#image0_108_16495" transform="scale(0.0025)" />
        </pattern>
        <image
          id="image0_108_16495"
          width="400"
          height="400"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </SvgIcon>
  );
};

export default LoaderIcon;