import { extendTheme } from '@chakra-ui/react';


const styles = {
  global: () => ({
    body: {
      bg: '#fff !important',
      color: '#000'
    },
  }),
};

const colors = {
  brand: {
    100: "#d77114",
    200: "#de1040",
    300: "#1c201f",
    400: "#FFFFFF",
    500: "rgba(242, 242, 242, 0.4)",
    600: "#212529",
    700: "#F2F5F9",
    800: "#FFF8F0",
    900: "#696E77",
  },

  alt: {
    100: "#16243D",
    200: "#111d32",
    300: "#F0F0F5",
    400: "#242424",
    500: "#f9d2d4",
    600: "#fdf2e8",
  }

};

const fonts = {
  heading: `'DM Sans Variable', sans-serif`,
  body: `'DM Sans Variable', sans-serif`,
};

const components = {

};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
