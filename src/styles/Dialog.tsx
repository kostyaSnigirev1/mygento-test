import { createTheme } from '@material-ui/core/styles';
import innerTheme from './innerTheme';

const theme = createTheme({
  components: {
    MuiDialog: {
      defaultProps: {
        disablePortal: true,
        transitionDuration: {
          enter: 300,
          exit: 300,
        },
        BackdropProps: {
          style: {
            backgroundColor: '#000000',
            opacity: '0.4',
          },
        },
      },
      styleOverrides: {
        root: {
          maxHeight: 800,
          [innerTheme.breakpoints.down('md')]: {
            maxHeight: 500,
            margin: '0 16px',
            width: '100%',
          },
        },
      },
    },
  },
});

const style = theme.components;

export default style;
