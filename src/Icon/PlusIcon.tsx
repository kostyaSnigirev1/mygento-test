import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const PlusIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  function FPlusIcon(props, ref) {
    return (
      <SvgIcon
        {...props}
        ref={ref}
        viewBox="0 0 23 24"
        sx={{
          width: 23,
          height: 24,
          fill: 'none',
        }}
      >
        <path
          d="M10.8262 3.91406H12.1738C12.2936 3.91406 12.3535 3.97396 12.3535 4.09375V19.9062C12.3535 20.026 12.2936 20.0859 12.1738 20.0859H10.8262C10.7064 20.0859 10.6465 20.026 10.6465 19.9062V4.09375C10.6465 3.97396 10.7064 3.91406 10.8262 3.91406Z"
          fill="#8C8C8C"
        />
        <path
          d="M3.95312 11.1465H19.0469C19.1667 11.1465 19.2266 11.2064 19.2266 11.3262V12.6738C19.2266 12.7936 19.1667 12.8535 19.0469 12.8535H3.95312C3.83333 12.8535 3.77344 12.7936 3.77344 12.6738V11.3262C3.77344 11.2064 3.83333 11.1465 3.95312 11.1465Z"
          fill="#8C8C8C"
        />
      </SvgIcon>
    );
  }
);

export { PlusIcon };

export default PlusIcon;
