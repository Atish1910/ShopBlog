import { NavLink } from "react-router-dom";

function Navbar() {
  const categories = [
    {
      label: "All Products",
      slug: "",
    },
    {
      label: "Electronics",
      slug: "electronics",
    },
    {
      label: "Jewelery",
      slug: "jewelery",
    },
    {
      label: "Men",
      slug: "mens-clothing",
    },
    {
      label: "Women",
      slug: "womens-clothing",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          ShopBlog
        </NavLink>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {categories.map((category) => (
              <li className="nav-item" key={category.slug}>
                <NavLink className="nav-link"  to={ category.slug? `/category/${category.slug}`: "/"}>{category.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
