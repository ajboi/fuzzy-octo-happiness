import {
  faTwitterSquare,
  faLinkedin,
  faMedium,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons";
import SocialTray from "./SocialTray";

// Twitter, LinkedIn,  Medium, Letterboxd and Goodreads

const Footer = () => {
  let mapper = [
    {
      name: "twitter",
      icon: faTwitterSquare,
      anchor: "https://www.twitter.com/",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      anchor: "https://www.linkedin.com/in/",
    },
    {
      name: "Medium",
      icon: faMedium,
      anchor: "https://www.medium.com/",
    },
    {
      name: "Goodreads",
      icon: faGoodreads,
      anchor: "https://www.goodreads.com/",
    },
  ];

  return (
    <footer className="footer">
      <div className="social-container">
        <p className="social-text heading-normal">Find me on:</p>
        <SocialTray list={mapper} />
        <small>
          &#169;
          {`${(() => {
            let a = new Date();
            return a.getFullYear();
          })()}. `}
          <a
            className="footer-small-link text-red"
            href="https://github.com/ajboi/blog"
            target="blank"
          >
            Deepak Krishna
          </a>
          .
        </small>
      </div>
    </footer>
  );
};

export default Footer;
