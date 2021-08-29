import { createTheme } from '@material-ui/core/styles';
import innerTheme from './innerTheme';

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: 76,
          width: 256,
          [innerTheme.breakpoints.down('md')]: {
            width: '100%',
          },
          '& .MuiFormHelperText-root.Mui-error': {
            color: '#F5222D',
            marginLeft: 0,
            whiteSpace: 'nowrap',
            lineHeight: '157%',
            fontSize: innerTheme.typography.pxToRem(14),
          },
        },
      },
    },
  },
});

const style = theme.components;

export default style;
