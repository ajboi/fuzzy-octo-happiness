import Head from "next/head";
import Image from "next/image";
import Heading from "../components/Heading";
// import Layout from "../components/Layout";
import Layout from "../components/Layout";
import FeaturedContainer from "../components/FeaturedContainer";

// import styles from "../styles/Home.module.css";
import { content } from "../tailwind.config";
// import StandardNavMenu from "../components/Header";

export default function Home(photoUrl) {
  return (
    <Layout>
      <Heading heading={"Featured Posts"} />
      <FeaturedContainer />
    </Layout>
  );
}
