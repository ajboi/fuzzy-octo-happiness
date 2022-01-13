import Footer from "./Footer";
import StandardNavMenu from "./Header";
const Layout = (props) => {
  return (
    <>
      <StandardNavMenu />
      {/* <StandardNav /> */}
      <div className="md:container md:mx-auto">
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
