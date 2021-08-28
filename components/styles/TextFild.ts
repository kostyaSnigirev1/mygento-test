import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            height: 40,
          },

          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D9D9D9hh',
            borderWidth: 1,
          },

          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#EAEAEA',
            borderRadius: 2,
            transition: '0.3s',
          },

          '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#40A9FF',
          },

          '& .MuiInputAdornment-root': {
            color: '#EAEAEA',
            transition: '0.3s',
          },

          '& .Mui-focused .MuiInputAdornment-root': {
            borderColor: '#40A9FF',
          },
          
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: '#40A9FF',
            boxShadow: '0px 0px 4px rgba(24, 144, 255, 0.5)',
          },
        },
      },
    },
  },
});

const style = theme.components;

export default style;
