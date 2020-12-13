import React from "react";

import {
  ChakraProvider
} from "@chakra-ui/react";

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraProvider resetCSS={true}>
    {children}
  </ChakraProvider>
);

export default ThemeContainer;
