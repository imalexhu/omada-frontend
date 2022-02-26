import React from "react";
import FadeIn from "react-fade-in";
import { Box, VStack, Input } from "@chakra-ui/react";

const Email = ({ handleFormData, values }) => {
  return (
    <React.Fragment>
      <FadeIn>
        <VStack w="100%" spacing={8} alignItems="center">
          <Box
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={400}
            color="gray.700"
          >
            What's Your{" "}
            <Box as="span" fontWeight={700} color="#0053CD">
              Email?
            </Box>
          </Box>
          <Input
            value={values["email"]}
            placeholder="Email"
            size="lg"
            onChange={handleFormData("email")}
          />
        </VStack>
      </FadeIn>
    </React.Fragment>
  );
};

export default Email;
