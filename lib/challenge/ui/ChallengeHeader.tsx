import { Button, Flex, Heading } from "@chakra-ui/react";
import { useDetail } from "@lib/core/data/DetailProvider";
import { ChallengeForm } from "./ChallengeForm";

export const ChallengeHeader = () => {
  const { setDetailReactNode } = useDetail();
  return (
    <Flex p="6" justify="space-between">
      <Heading>Challenges</Heading>
      <Button
        onClick={() => setDetailReactNode(<ChallengeForm data={undefined} />)}
        colorScheme="blue"
      >
        Create
      </Button>
    </Flex>
  );
};
