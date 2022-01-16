import {
  faTwitterSquare,
  faLinkedin,
  faMedium,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons";
import SocialTray from "./SocialTray";
import Link from "next/link";

// Twitter, LinkedIn,  Medium, Letterboxd and Goodreads

const Footer = () => {
  let mapper = [
    {
      name: "twitter",
      icon: faTwitterSquare,
      anchor: "https://twitter.com/DeepakKrishna_",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      anchor: "https://www.linkedin.com/in/deepak-krishna/",
    },
    {
      name: "Medium",
      icon: faMedium,
      anchor: "https://medium.com/@deepak.krishna",
    },
    {
      name: "Goodreads",
      icon: faGoodreads,
      anchor: "www.goodreads.com/deepakkrishna",
    },
  ];

  return (
    <footer className="footer">
      <div className="social-container">
        <p className="social-text content-bold">Find me on:</p>
        <SocialTray list={mapper} />
        <small>
          &#169;
          {`${(() => {
            let a = new Date();
            return a.getFullYear();
          })()} `}
          <Link href="/about" passHref>
            <a className="footer-small-link text-red">Deepak Krishna </a>
          </Link>
          Powered by{" "}
          <a href="https://nextjs.org" className="footer-small-link text-red">
            NextJS
          </a>{" "}
          and{" "}
          <a href="https://prismic.io" className="footer-small-link text-red">
            Prismic
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;

// [7:02 PM, 1/16/2022] Ajai: https://medium.com/@deepak.krishna
// [7:03 PM, 1/16/2022] Ajai: https://www.linkedin.com/in/deepak-krishna/
// [7:14 PM, 1/16/2022] Ajai: www.goodreads.com/deepakkrishna
// [7:15 PM, 1/16/2022] Ajai: https://twitter.com/DeepakKrishna_
