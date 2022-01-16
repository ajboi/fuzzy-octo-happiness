import Heading from "./Heading";
import { RichText } from "prismic-reactjs";

const WorkItem = ({ organisation, role, duration, contribution }) => {
  return (
    <div className="post-container">
      <div className="post-heading">
        <h3 className={`text-left heading-bold text-3xl md:text-4xl my-2`}>
          {organisation}
        </h3>
        <p className="work-role">{role}</p>
        <p className="work-duration">{duration}</p>
      </div>
      <div className="post-content-container">{contribution}</div>
    </div>
  );
};

export default WorkItem;
