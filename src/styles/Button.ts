import { createTheme } from '@material-ui/core/styles';
import innerTheme from './innerTheme';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none !important',
        },
      },
      variants: [
        {
          props: { color: 'fileColor' },
          style: {
            backgroundColor: innerTheme.palette.fileColor.main,
          },
        },
      ],
    },
  },
});

const style = theme.components;

export default style;

declare module '@material-ui/core/Button/Button' {
  interface ButtonPropsColorOverrides {
    fileColor: true;
  }
}
