import React from "react";
import * as FontAwesome from "react-icons/fa";

import { Box } from "@chakra-ui/react";

const DynamicIcon = ({ iconName, size, color, ...rest }) => {
    const icon = React.createElement(FontAwesome[iconName]);
    return <Box style={{ fontSize: size, color: color }} {...rest}>{icon}</Box>;
};

export default DynamicIcon;
