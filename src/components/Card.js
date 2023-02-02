import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack align="stretch" bg="white" color="black" borderRadius="10px">
      <Image src={imageSrc} />
      <Heading p={3} as="h2">
        {title}
      </Heading>
      <Text p={3}>{description}</Text>
      <HStack p={3}>
        <Text as="b">See more</Text>
        <FontAwesomeIcon p={2} icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
