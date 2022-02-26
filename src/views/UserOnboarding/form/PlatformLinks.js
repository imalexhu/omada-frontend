import React from "react";
import platforms from "../../../stubbedData";
import { Box, Center, HStack, Icon, Link, VStack } from "@chakra-ui/react";
import FadeIn from "react-fade-in";

import DynamicIcon from "../../../components/DynamicIcon/DynamicIcon";
import { getByRole } from "@testing-library/react";

const PlatformLinks = () => {
  return (
    <React.Fragment>
      <FadeIn>
        <VStack w="100%" spacing={8} alignItems="center">
          <Box
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={400}
            color="gray.700"
          >
            Here are your invite links !
          </Box>
          <Center>
            <HStack w="100%" spacing={2}>
              {Object.keys(platforms).map(function (p, index) {
                if (!platforms[p].inviteLink) return;
                return (
                  <Link href={platforms[p].url} isExternal>
                    <DynamicIcon
                      iconName={platforms[p].icon}
                      size={40}
                      color={"black"}
                    />
                  </Link>
                );
              })}
            </HStack>
          </Center>
        </VStack>
      </FadeIn>
    </React.Fragment>
  );
};

export default PlatformLinks;
