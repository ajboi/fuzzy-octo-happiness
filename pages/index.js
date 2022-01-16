import Head from "next/head";
import Image from "next/image";
import Heading from "../components/Heading";
// import Layout from "../components/Layout";
import Layout from "../components/Layout";
import FeaturedContainer from "../components/FeaturedContainer";
import Button from "../components/Button";
import ButtonCenterContainer from "../components/ButtonCenterContainer";
import Footer from "../components/Footer";
import { getBlogsForFeatured } from "../prismicConfiguration";

// import styles from "../styles/Home.module.css";
// import { content } from "../tailwind.config";
// import StandardNavMenu from "../components/Header";

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Deepak Krishna</title>
        <meta
          name="Description"
          content="Hi, I am Deepak Krishna, and this is my personal blog."
        />
        <meta
          name="Keywords"
          content="Deepak Krishna, Deepak, Krishna, Deepak Krishna blog, Deepak blog"
        />
      </Head>
      <Heading heading={"Featured Posts"} alignment="center" />
      <FeaturedContainer posts={posts} />
      <ButtonCenterContainer>
        <Button link="/blogs" text={`Go to Blog`} />
      </ButtonCenterContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  let posts = await getBlogsForFeatured();
  return {
    props: { posts },
    revalidate: 1,
  };
}
