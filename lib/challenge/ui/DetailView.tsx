import { Box } from "@chakra-ui/react";
type Props = {
  challengeId: string;
};
export const DetailView = ({ challengeId }: Props) => {
  return <Box>Here is some detail view {challengeId}</Box>;
};
