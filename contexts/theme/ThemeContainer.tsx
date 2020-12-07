import React from "react";

import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
  theme
} from "@chakra-ui/react";

// import theme from "styles/theme";

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ChakraThemeProvider>
);

export default ThemeContainer;
