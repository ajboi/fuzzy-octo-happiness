import Head from "next/head";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import { getAbout } from "../prismicConfiguration";
import { RichText } from "prismic-reactjs";

export default function About({ about }) {
  return (
    <Layout>
      <Head>
        <title>About | Deepak Krishna</title>
        <meta
          name="Description"
          content="Hi, I am Deepak Krishna, and this is my personal blog."
        />
        <meta
          name="Keywords"
          content="Deepak Krishna, Deepak, Krishna, Deepak Krishna blog, Deepak blog, Deepak Krishna TAFE, Deepak Krishna Flex, Deepak Krishna GCT, Deepak Krishna SJC, Deepak Krishna SAE"
        />
      </Head>
      <Heading heading="About" />
      <div className="post-container">
        <div className="post-featured-image-container">
          <img
            className="post-featured-image"
            src={about.profile_picture.url}
            alt={about.profile_picture.alt}
          />
        </div>
        <div className="post-content-container">
          {RichText.render(about.about)}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let about = await getAbout();
  return {
    props: { about },
    revalidate: 1,
  };
}
