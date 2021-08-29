import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const CancelIconLarge = React.forwardRef<SVGSVGElement, SvgIconProps>(
  function FCancelIconLarge(props, ref) {
    return (
      <SvgIcon
        {...props}
        ref={ref}
        viewBox="0 0 16 16"
        sx={{
          width: 16,
          height: 16,
          fill: 'none',
        }}
      >
        <path
          d="M9.21376 8L15.3661 0.666406C15.4692 0.544531 15.3825 0.359375 15.2231 0.359375H13.3528C13.2427 0.359375 13.1372 0.408594 13.0645 0.492969L7.99032 6.54219L2.91611 0.492969C2.84579 0.408594 2.74032 0.359375 2.62782 0.359375H0.757512C0.598137 0.359375 0.511418 0.544531 0.614543 0.666406L6.76689 8L0.614543 15.3336C0.591442 15.3608 0.576622 15.394 0.571842 15.4293C0.567061 15.4647 0.572521 15.5006 0.587574 15.533C0.602627 15.5653 0.626641 15.5926 0.656764 15.6117C0.686886 15.6308 0.721853 15.6408 0.757512 15.6406H2.62782C2.73798 15.6406 2.84345 15.5914 2.91611 15.507L7.99032 9.45781L13.0645 15.507C13.1349 15.5914 13.2403 15.6406 13.3528 15.6406H15.2231C15.3825 15.6406 15.4692 15.4555 15.3661 15.3336L9.21376 8Z"
          fill="#2F80ED"
        />
      </SvgIcon>
    );
  }
);

export { CancelIconLarge };

export default CancelIconLarge;
