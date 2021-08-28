import * as React from 'react';
import { ThemeProviderProps } from '@material-ui/core/styles/ThemeProvider';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import innerTheme from './innerTheme';
import TextFild from './TextFild';
import Button from './Button';
import FormControl from './FormControl';

const theme = createTheme({
  ...innerTheme,
  components: {
    ...TextFild,
    ...Button,
    ...FormControl,
  },
});

const MuiThemeProvider: React.FC<Omit<ThemeProviderProps, 'theme'>> = ({
  ...props
}) => {
  console.log(theme);

  return <ThemeProvider {...props} theme={{ ...theme }} />;
};

export default MuiThemeProvider;
