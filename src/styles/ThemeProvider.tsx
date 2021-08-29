import * as React from 'react';
import { ThemeProviderProps } from '@material-ui/core/styles/ThemeProvider';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import innerTheme from './innerTheme';
import Button from './Button';
import FormControl from './FormControl';
import DialogTitle from './DialogTitle';
import Dialog from './Dialog';

const theme = createTheme({
  ...innerTheme,
  components: {
    ...Button,
    ...FormControl,
    ...DialogTitle,
    ...Dialog,
  },
});

const MuiThemeProvider: React.FC<Omit<ThemeProviderProps, 'theme'>> = ({
  ...props
}) => {
  return <ThemeProvider {...props} theme={{ ...theme }} />;
};

export default MuiThemeProvider;
