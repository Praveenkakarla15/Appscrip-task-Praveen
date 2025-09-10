export default function ProductCard({ product }) {
  const slug = product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <article className="product-card" aria-labelledby={`title-${product.id}`}>
      <img
        src={product.image}
        alt={`${product.title} - ${product.category}`}
        loading="lazy"
        data-file-name={`${slug}-${product.id}.jpg`}
        className="product-card-img"
      />
      <div className="product-card-body">
        <h3 id={`title-${product.id}`} className="product-card-title">
          {product.title}
        </h3>
        <div className="product-card-category">{product.category}</div>
        <div className="product-card-price">₹{(product.price * 86).toFixed(0)}</div>
      </div>
    </article>
  );
}
