import FeaturedPostCard from "./FeaturedPostCard";
const FeaturedContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16	md:gap-y-8 md:my-4">
      <FeaturedPostCard />
      <FeaturedPostCard />
      <FeaturedPostCard />
      <FeaturedPostCard />
      <FeaturedPostCard />
      <FeaturedPostCard />
    </div>
  );
};

export default FeaturedContainer;
