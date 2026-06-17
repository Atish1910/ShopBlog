import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = React.memo(({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-3"
      />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>

        <p className="text-muted small">{product.category}</p>

        <h5 className="text-success">${product.price}</h5>

        <button className="btn btn-primary mt-auto" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
});

export default ProductCard;
