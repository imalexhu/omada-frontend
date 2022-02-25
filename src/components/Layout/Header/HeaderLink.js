import React from "react";

import { NavLink } from 'react-router-dom';
import { Link } from "@chakra-ui/react";

const HeaderLink = ({ children, toRoute, ...rest }) => {
    return (
        <Link
            as={NavLink}
            to={toRoute}
            color="gray.500"
            _hover={{
                color: "black"
            }}
            {...rest}
        >
            {children}
        </Link>
    );
}

export default HeaderLink;