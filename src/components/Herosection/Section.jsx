import PropTypes from "prop-types";

const Section = ({ className, style, id, children }) => {
  return (
    <section 
      className={`p-0 m-0 flex w-full bg-black/80 min-w-[320px] min-h-screen ${className}`} 
      style={style} 
      id={id}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
