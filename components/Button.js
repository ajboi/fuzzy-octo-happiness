import Link from "next/link";
const Button = ({ link, text }) => {
  return (
    <button className="h-10 px-5 m-8 bg-red text-white rounded-lg focus:shadow-outline">
      <Link href={link} passHref>
        <a>{text}</a>
      </Link>
    </button>
  );
};

export default Button;
