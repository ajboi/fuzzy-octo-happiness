import Link from "next/link";
import { RichText } from "prismic-reactjs";

const FeaturedPostCard = ({ slugurl, title, date, imagelink, imagealt }) => {
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
    <div className="postcard mx-auto m-4">
      <div className="card-image">
        <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}>
          <a>
            <img
              className="card-img"
              src={imagelink}
              width="300px"
              height="200px"
              alt={imagealt}
            />
          </a>
        </Link>
      </div>
      <div className="card-contents">
        {/* <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}> */}
        {/* <a className="card-title-link"> */}
        <Link
          href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}
          passHref
        >
          <a>
            <h3 className="card-title text-xl md:text-2xl hover:text-red transition duration-300">
              {title}
            </h3>
          </a>
        </Link>
        {/* </a> */}
        {/* <p className="post-excerpt">{excerpt}</p> */}
        {/* <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}> */}
        {/* <a className="card-read-more">Read Complete Story</a> */}
        {/* </Link> */}
        <p className="card-date text-xs text-red-light heading-semibold">
          {dateFormat(date)}
        </p>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
