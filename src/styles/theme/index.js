import { theme as ChakraTheme, extendTheme } from '@chakra-ui/react';

import components from './components';
import fonts from './foundations/fonts';

const newTheme = {
    ...ChakraTheme,
    components,
    fonts
};

export default extendTheme(newTheme);