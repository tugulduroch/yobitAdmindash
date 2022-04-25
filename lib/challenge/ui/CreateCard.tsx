import { Box, Heading, Link } from "@chakra-ui/react";
import { useDetail } from "@lib/core/data/DetailProvider";
import { ChallengeForm } from "./ChallengeForm";

export const CreateCard = () => {
  const { setDetailReactNode } = useDetail();
  return (
    <Box>
      <Link
        onClick={() => setDetailReactNode(<ChallengeForm data={undefined} />)}
      >
        <Heading size="md">Create a challenge</Heading>
      </Link>
    </Box>
  );
};
