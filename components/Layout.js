import Footer from "./footer";
import StandardNavMenu from "./Header";
import StandardNav from "./Hader";
const Layout = (props) => {
  return (
    <>
      <StandardNavMenu />
      {/* <StandardNav /> */}
      <div className="md:container md:mx-auto">
        {props.children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
