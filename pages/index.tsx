import { useChallenges } from "@lib/challenge/data/hooks";
import { ListView as ChallengeListView } from "@lib/challenge/ui/ListView";
import { Layout } from "@lib/core/ui/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // const { data } = useChallenges();
  // console.log(data);

  return (
    <Layout>
      <ChallengeListView />
    </Layout>
  );
};

export default Home;
