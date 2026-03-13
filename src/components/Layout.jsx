import Header from "./Header/Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-[60px] md:pt-[70px] min-h-screen">
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
