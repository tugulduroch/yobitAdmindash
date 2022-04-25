import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { useDetail } from "@lib/core/data/DetailProvider";
import { useChallenges } from "../data/hooks";
import { CreateCard } from "./CreateCard";
import { DetailView } from "./DetailView";

export const ListView = () => {
  const { data } = useChallenges();
  const { setDetailReactNode } = useDetail();
  return (
    <>
      {data?.map((r, i) => (
        <Box key={i}>
          <Link
            onClick={() => {
              setDetailReactNode(<DetailView challengeId={r.id} />);
            }}
          >
            <Heading>Title</Heading>
          </Link>
          <Text>Some descriptiong goes here</Text>
        </Box>
      ))}
      <CreateCard />
    </>
  );
};
