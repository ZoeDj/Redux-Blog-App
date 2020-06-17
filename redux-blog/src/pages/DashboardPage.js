import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <section>
      <h1>Blog</h1>
      <p>Enjoy...</p>
      <Link to="/posts" className="button">
        View Posts
      </Link>
    </section>
  );
};
export default DashboardPage;
