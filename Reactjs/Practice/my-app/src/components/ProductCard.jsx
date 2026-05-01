function ProductCard({ title, price, key }) {
  return (
    <div className="card">
      {/* <img src={image} alt={title} width="150" />
      <h3>{title}</h3>
      <p>₹{price}</p>
      <button>Buy Now</button> */}
      <h2>{key}</h2>
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;