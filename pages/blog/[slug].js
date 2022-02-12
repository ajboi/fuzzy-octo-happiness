import Head from "next/head";
import Image from "next/image";
import Heading from "../../components/Heading";
import { RichText } from "prismic-reactjs";
import { getBlogWithSlug } from "../../prismicConfiguration";
import Layout from "../../components/Layout";
import ButtonCenterContainer from "../../components/ButtonCenterContainer";
import Button from "../../components/Button";

export default function Blog({ post }) {
  let htmlcontent = post.body;

  let mdRender = htmlcontent.map((slice) => {
    if (slice == null) {
      return;
      RichText.render(slice);
    }
    if (slice.type === "quote") {
      return <blockquote>{RichText.render(slice.primary.quote)}</blockquote>;
    }
    if (slice.type === "paragraph") {
      return RichText.render(slice.primary.paragraph);
    }
    if (slice.type === "image") {
      return (
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      );
    }
  });

  let dateFormat = function (date) {
    date = date.split("-");
    date = new Date(date[0], date[1] - 1, date[2]);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${date.getDate()} ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
  };

  return (
    <Layout>
      <Head>
        <title>{`${RichText.asText(post.title)} | Deepak's Blog`}</title>
        <link rel="icon" href="favico.ico" />
        <meta name="Description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
      </Head>
      <div className="post-container">
        <div className="post-title-container">
          <div className="post-heading">
            <Heading heading={RichText.asText(post.title)} />
          </div>
          {/* <h2 className="post-title">{RichText.asText(post.title)}</h2>
           */}
        </div>

        <div className="post-featured-image-container">
          <img
            className="post-featured-image"
            src={post.featuredimage.url}
            alt={post.featuredimage.alt}
            width="1200px"
            height="800px"
          />
        </div>

        <div className="post-content-container">
          {mdRender.map((x, index) => {
            return <div key={index}>{x}</div>;
          })}
        </div>
      </div>
      <ButtonCenterContainer>
        <Button link="/" text={`Go Back`} />
      </ButtonCenterContainer>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  let slug = params.slug;
  console.log(slug);
  let value = await getBlogWithSlug(slug);
  let post_val = value.edges[0];
  let post = post_val.node;
  return {
    props: { post },
  };
}
