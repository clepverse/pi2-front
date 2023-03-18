import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      900: '#1E1E1E',
      200: '#3F2C3D',
    },
    green: {
      500: '#CFFF11',
    },
    purple: {
      800: '#332332',
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
  sizes: {
    14: '56px',
    33: '148px',
  },
});
