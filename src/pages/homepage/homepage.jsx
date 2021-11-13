import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <section className="homepage-section">
      <Link className="action-item ghost" to="create">
        Create
      </Link>
      <Link className="action-item" to="display">
        Display
      </Link>
    </section>
  );
};

export default Homepage;
