const Card = ({ img, name, description, price }) => {
  return (
    <div className="card cursor-pointer col-span-4 card-compact w-96 bg-base-100 shadow-2xl shadow-slate-300">
      <figure>
        <img src={img} alt="Shoes" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="">{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
