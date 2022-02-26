import React from "react";
import * as FontAwesome from "react-icons/fa";

const DynamicIcon = ({ iconName, size, color }) => {
    const icon = React.createElement(FontAwesome[iconName]);
    return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};

export default DynamicIcon;