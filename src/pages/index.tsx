import type { NextPage } from "next";
import Head from "next/head";
import Home from "../views/Home";

const Index: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>StreamDAO</title>
        <meta
          name="Swap"
          content="Aggregator"
        />
      </Head>
      <Home />
    </div>
  );
};

export default Index;
