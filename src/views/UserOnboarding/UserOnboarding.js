import React, { useState } from "react";

import { ProfilePicture, UserName, PlatformLinks, Email } from "./form";
import { Flex, Container, VStack, HStack, IconButton } from "@chakra-ui/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const maxPage = 4;

const UserOnboarding = () => {
  const [page, setPage] = useState(1);

  const nextForm = () => {
    if (page === maxPage) {
      return;
    }

    setPage((page) => page + 1);
  };

  const prevForm = () => {
    if (page === 1) {
      return;
    }

    setPage((page) => page - 1);
  };
  return (
    <React.Fragment>
      <Flex h="100vh" bg="#F5F5F6" alignItems="center">
        <Container maxW="container.md">
          <VStack h="10vh" spacing={6} mb={8}>
            {page === 1 && <UserName page={page} setPage={setPage} />}
            {page === 2 && <ProfilePicture page={page} setPage={setPage} />}
            {page === 3 && <PlatformLinks page={page} setPage={setPage} />}
            {page === 4 && <Email page={page} setPage={setPage} />}

            <HStack pt={6} spacing={8}>
              <IconButton
                colorScheme="messenger"
                aria-label="Previous Form"
                size="lg"
                rounded="full"
                onClick={prevForm}
                icon={<BsArrowLeft size={22} />}
              />
              <IconButton
                colorScheme="messenger"
                aria-label="Next Form"
                size="lg"
                rounded="full"
                onClick={nextForm}
                icon={<BsArrowRight size={22} />}
              />
            </HStack>
          </VStack>
        </Container>
      </Flex>
    </React.Fragment>
  );
};

export default UserOnboarding;