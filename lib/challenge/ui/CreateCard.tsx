import { Box, Heading, Link } from "@chakra-ui/react";
import { useDetail } from "@lib/core/data/DetailProvider";
import { CreateView } from "./CreateView";

export const CreateCard = () => {
  const { setDetailReactNode } = useDetail();
  return (
    <Box>
      <Link onClick={() => setDetailReactNode(<CreateView />)}>
        <Heading>Create a challenge</Heading>
      </Link>
    </Box>
  );
};
