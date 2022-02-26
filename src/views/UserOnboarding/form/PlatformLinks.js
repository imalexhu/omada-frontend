import React from "react";
import platforms from "../../../stubbedData";
import { Box, Center, HStack, Icon, Link } from "@chakra-ui/react";

const PlatformLinks = () => {
  return (
    <React.Fragment>
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
              <Link href={platforms[p].inviteLink}>
                <Icon as={platforms[p].icon} w={10} h={10} mr={5} />
              </Link>
            );
          })}
        </HStack>
      </Center>
    </React.Fragment>
  );
};

export default PlatformLinks;
