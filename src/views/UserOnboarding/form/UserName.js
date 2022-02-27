import React from "react";
import FadeIn from "react-fade-in";

import { VStack, Box, Input } from "@chakra-ui/react";

const UserName = ({ handleFormData, values }) => {
  return (
    <FadeIn>
      <VStack w="100%" spacing={8} alignItems="center">
        <Box
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={400}
          color="gray.700"
        >
          What's Your{" "}
          <Box as="span" fontWeight={700} color="#0053CD">
            User Name?
          </Box>
        </Box>
        <Input
          value={values["userName"]}
          placeholder="User Name"
          size="lg"
          onChange={handleFormData("userName")}
        />
      </VStack>
    </FadeIn>
  );
};

export default UserName;
