import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to="/products">
        <button>Shop now</button>
      </NavLink>
      <nav>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </div>
  );
}

export default Home;
