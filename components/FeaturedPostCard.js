const FeaturedPostCard = () => {
  return (
    <div className="postcard mx-auto m-4">
      <div className="card-image">
        <img
          className="card-img"
          src="https://source.unsplash.com/random/300x200"
          width="300px"
          height="200px"
        />
      </div>
      <div className="card-contents">
        {/* <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}> */}
        {/* <a className="card-title-link"> */}
        <h3 className="card-title text-xl md:text-2xl hover:text-blue transition duration-200">
          I can do better - Title of my Sex tape
        </h3>
        {/* </a> */}
        {/* <p className="post-excerpt">{excerpt}</p> */}
        {/* <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}> */}
        {/* <a className="card-read-more">Read Complete Story</a> */}
        {/* </Link> */}
        <p className="card-date text-xs md:text-sm text-blue-light content-normal">
          Dec 31, 2022
        </p>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
