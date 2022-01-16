import Head from "next/head";
import WorkItem from "../components/WorkItem";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import { getPows } from "../prismicConfiguration";
import { RichText } from "prismic-reactjs";

export default function ProofOfWork({ pows }) {
  console.log(Array.isArray(pows));
  return (
    <Layout>
      <Head>
        <title>Proof of Work | Deepak Krishna</title>
        <meta
          name="Description"
          content="Hi, I am Deepak, and this is my personal blog."
        />
      </Head>
      <Heading heading="Proof of Work" />
      {pows.map((i) => (
        <WorkItem
          key={pows.indexOf(i)}
          role={i.node.role}
          organisation={RichText.asText(i.node.organisation)}
          duration={i.node.duration}
          contribution={RichText.render(i.node.contribution)}
        />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  let pows = await getPows();
  return {
    props: { pows },
    revalidate: 1,
  };
}
