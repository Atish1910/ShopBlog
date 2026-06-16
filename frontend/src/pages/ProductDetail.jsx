import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { getProductById } from "../services/productService";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    setLoading(true);

    const response = await getProductById(id);

    if (response.success) {
      setProduct(response.data);
    } else {
      toast.error(response.message);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h4>Product not found</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center product-detail-wrapper">
        {/* Product Image */}

        <div className="col-md-5 mb-4">
          <div className="product-image-box">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid product-image"
            />
          </div>
        </div>

        {/* Product Info */}

        <div className="col-md-7">
          <span className="badge bg-primary mb-3">{product.category}</span>

          <h2 className="product-title">{product.title}</h2>

          <h3 className="product-price text-success my-3">${product.price}</h3>

          <p className="product-description">{product.description}</p>

          <div className="rating-box mb-4">
            <span className="badge bg-warning text-dark me-2">
              ⭐ {product.rating.rate}
            </span>

            <span className="text-muted">({product.rating.count} Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
