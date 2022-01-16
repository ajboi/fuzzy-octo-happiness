import FeaturedPostCard from "./FeaturedPostCard";
import { RichText } from "prismic-reactjs";

const FeaturedContainer = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16	md:gap-y-8 md:my-4">
      {posts.map((i) => (
        <FeaturedPostCard
          key={posts.indexOf(i)}
          slugurl={i.node._meta.uid}
          title={RichText.asText(i.node.title)}
          date={i.node.date}
          imagelink={i.node.featuredimage.thumb.url}
          imagealt={i.node.featuredimage.alt}
        />
      ))}
    </div>
  );
};

export default FeaturedContainer;
