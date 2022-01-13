import Layout from "../components/Layout";
import Heading from "../components/Heading";
import BlogPostsList from "../components/BlogPostsList";

export default function Blog() {
  return (
    <Layout>
      <Heading heading="Unfiltered Thoughts" />
      <BlogPostsList />
    </Layout>
  );
}
