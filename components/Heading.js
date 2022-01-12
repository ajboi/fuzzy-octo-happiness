const Heading = (props) => {
  return (
    <div className="my-3 md:my-9">
      <h2 className="text-center heading-bold text-4xl md:text-5xl">
        {props.heading}
      </h2>
    </div>
  );
};

export default Heading;
