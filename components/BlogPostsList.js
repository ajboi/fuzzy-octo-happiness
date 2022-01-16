import Link from "next/link";
import { RichText } from "prismic-reactjs";

const BlogPostsList = ({ posts }) => {
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
    <ul className="grid grid-cols-1 gap-8 my-4 blog-list">
      {posts.map((i) => (
        <BlogPostLink
          key={posts.indexOf(i)}
          slugurl={i.node._meta.uid}
          title={RichText.asText(i.node.title)}
          date={dateFormat(i.node.date)}
        />
      ))}
    </ul>
  );
};

const BlogPostLink = ({ slugurl, title, date }) => {
  return (
    <li>
      <span className="text-base md:text-lg text-red mr-2">{date}</span>

      <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}>
        <a>
          <span className="ml-2 text-red-light text-xl md:text-2xl heading-normal hover:underline">
            {title}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default BlogPostsList;
