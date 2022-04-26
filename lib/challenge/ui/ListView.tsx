import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useDetail } from "@lib/core/data/DetailProvider";
import { useChallenges } from "../data/hooks";
import { ChallengeForm } from "./ChallengeForm";
import { DetailView } from "./DetailView";

export const ListView = () => {
  const { data } = useChallenges();
  const { setDetailReactNode } = useDetail();
  return (
    <VStack gap="2">
      {data?.map((r, i) => (
        <Box bg="gray.100" p="2" boxShadow="base" border="1px" key={i}>
          <Link
            onClick={() => {
              setDetailReactNode(<ChallengeForm data={r} />);
            }}
          >
            <Heading size="md">{r.title}</Heading>
          </Link>
          <Text>{r.content}</Text>
          <Text size="xs">{r.reward}</Text>
        </Box>
      ))}
    </VStack>
  );
};
