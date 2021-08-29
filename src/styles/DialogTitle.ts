import { createTheme } from '@material-ui/core/styles';
import innerTheme from './innerTheme';

const theme = createTheme({
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '40px 44px 8px',
          [innerTheme.breakpoints.down('md')]: {
            padding: '32px 16px 8px',
          },
        },
      },
    },
  },
});

const style = theme.components;

export default style;
