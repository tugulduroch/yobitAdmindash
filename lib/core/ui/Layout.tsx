import { Flex } from "@chakra-ui/react";
import { ReactChild, ReactChildren } from "react";
import { useDetail } from "../data/DetailProvider";
import { Feature } from "../data/Feature";
import { Sidebar } from "./Sidebar";

type Props = {
  children: ReactChild | ReactChildren;
};
export function Layout({ children }: Props) {
  const { detailReactNode } = useDetail();
  return (
    <Flex h="100vh" flexDirection="column">
      <Flex
        flex="1"
        overflow="hidden"
        bg="gray.900"
        color="white"
        fontSize="sm"
      >
        <Sidebar />
        <Flex
          bg="gray.100"
          display={{
            base: "none",
            lg: "block",
          }}
          width={"96"}
          direction="column"
          overflowY="auto"
          borderRightWidth="1px"
          p="6"
        >
          {children}
        </Flex>
        <Flex flex="1" p="6" bg="gray.100">
          {detailReactNode}
        </Flex>
      </Flex>
    </Flex>
  );
}
