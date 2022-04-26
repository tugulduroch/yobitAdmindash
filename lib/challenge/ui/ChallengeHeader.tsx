import { Button, Flex, Heading } from "@chakra-ui/react";
import { useDetail } from "@lib/core/data/DetailProvider";
import { ChallengeForm } from "./ChallengeForm";

export const ChallengeHeader = () => {
  const { setDetailReactNode } = useDetail();
  return (
    <Flex p="6" justify="space-between">
      <Heading>Тэмцээнүүд</Heading>
      <Button
        onClick={() => setDetailReactNode(<ChallengeForm data={undefined} />)}
        colorScheme="blue"
      >
        Тэмцээн үүсгэх
      </Button>
    </Flex>
  );
};
