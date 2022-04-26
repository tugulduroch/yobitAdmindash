import { Box, Flex } from "@chakra-ui/react";
import { useChallenges } from "@lib/challenge/data/hooks";
import { ChallengeHeader } from "@lib/challenge/ui/ChallengeHeader";
import { ListView as ChallengeListView } from "@lib/challenge/ui/ListView";
import { useDetail } from "@lib/core/data/DetailProvider";
import { Layout } from "@lib/core/ui/Layout";
import { Sidebar } from "@lib/core/ui/Sidebar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // const { data } = useChallenges();
  // console.log(data);
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
        <Box w="full" color="darkgray" bg="gray.100">
          <ChallengeHeader />
          <Flex>
            <Flex
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
              <ChallengeListView />
            </Flex>
            <Flex overflowY="auto" flex="1" p="6">
              {detailReactNode}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
