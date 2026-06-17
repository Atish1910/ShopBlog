import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [debouncing, setDebouncing] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, debouncing, category]);

  const fetchProducts = async () => {
    setLoading(true);

    const response = await getProducts();

    if (response.success) {
      setProducts(response.data);

      toast.success(`${response.data.length} Products Loaded`);
    } else {
      toast.error(response.message);
    }

    setLoading(false);
  };

  const filterProducts = () => {
    let updatedProducts = [...products];

    if (debouncing) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(debouncing.toLowerCase()),
      );
    }

    if (category) {
      updatedProducts = updatedProducts.filter((product) => {
        const productCategory = product.category
          .toLowerCase()
          .replace(/'/g, "")
          .replace(/\s+/g, "-");

        return productCategory === category;
      });
    }
    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncing(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="container py-5">

      <div className="row mb-4 justify-content-center">
        <div className="col-md-10 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="text-center">
              <h5>No Products Found</h5>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Shop;
