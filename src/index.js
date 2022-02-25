import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import newTheme from "./styles/theme";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={newTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);