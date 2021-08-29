import { createTheme } from '@material-ui/core/styles';

const font = {
  tiny: 14,
  small: 16,
  normal: 18,
  large: 22,
  huge: 24,
  superHuge: 40,
};

const weight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};
const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;
const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

const pallEteText = {
  primary: '#262626',
  secondary: '#BFBFBF',
};

const innerTheme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
    h1: {
      fontSize: pxToRem(font.superHuge),
      fontWeight: weight.semiBold,
    },
    h2: {
      fontSize: pxToRem(font.huge),
      fontWeight: weight.bold,
    },
    h3: {
      fontSize: pxToRem(font.large),
      fontWeight: weight.semiBold,
    },
    subtitle1: {
      fontSize: pxToRem(font.tiny),
      fontWeight: weight.regular,
    },
    smallRegular: {
      fontSize: pxToRem(font.superHuge),
      fontWeight: weight.semiBold,
    },
    privatPolicyText: {
      color: '#262626',
      fontSize: pxToRem(20),
      fontWeight: weight.regular,
      lineHeight: '190%',
    },
  },
  palette: {
    primary: {
      main: '#1890FF',
      light: '#40A9F',
      dark: '#096DD9',
    },
    fileColor: {
      main: '#F5F5F5',
    },
    text: pallEteText,
  },
});

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    smallRegular?: React.CSSProperties;
    privatPolicyText?: React.CSSProperties;
  }

  interface TypographyOptions {
    smallRegular?: React.CSSProperties;
    privatPolicyText?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@material-ui/core/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    smallRegular?: true;
    privatPolicyText?: true;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    fileColor: {
      main: React.CSSProperties['color'];
    };
  }

  interface PaletteOptions {
    fileColor: {
      main: React.CSSProperties['color'];
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypographyPropsVariantOverrides {
    fileColor?: true;
  }
}

export default innerTheme;
