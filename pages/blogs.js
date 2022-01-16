import Layout from "../components/Layout";
import Head from "next/head";
import Heading from "../components/Heading";
import BlogPostsList from "../components/BlogPostsList";
import { getBlogsForList } from "../prismicConfiguration";

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <Head>
        <title>Deepak Krishna&#39;s Blog</title>
        <meta
          name="Description"
          content="Hi, I am Deepak Krishna, and this is my personal blog."
        />
        <meta
          name="Keywords"
          content="Deepak Krishna, Deepak, Krishna, Deepak Krishna blog, Deepak blog"
        />
      </Head>
      <Heading heading="Blogs" />
      <BlogPostsList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  let posts = await getBlogsForList();
  return {
    props: { posts },
    revalidate: 1,
  };
}
