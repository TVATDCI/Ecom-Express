import Header from "./Header/Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
