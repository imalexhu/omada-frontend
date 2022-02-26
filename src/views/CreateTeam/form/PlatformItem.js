import React, { useState } from "react";

import DynamicIcon from "../../../components/DynamicIcon/DynamicIcon";
import { Flex } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";

const PlatformItem = ({
    children,
    icon,
    handleAddToSelected,
    ...rest
}) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <Flex
            w="350px"
            h={14}
            px={3}
            fontWeight={600}
            bg={isSelected ? "#CCDDF5" : "gray.200"}
            rounded="xl"
            border="1px"
            borderColor={isSelected ? "#3375D7" : "gray.300"}
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            _hover={{
                bg: "#CCDDF5",
                borderColor: "#3375D7"
            }}
            _active={{ bg: darken("#CCDDF5") }}
            onClick={() => {
                setIsSelected(!isSelected)
                handleAddToSelected(children, icon)
            }}
            transition="0.05s ease-in"
            {...rest}
        >
            {children}
            <DynamicIcon iconName={icon} size={22} color="#0053CD" />
        </Flex>
    );
}

export default PlatformItem;