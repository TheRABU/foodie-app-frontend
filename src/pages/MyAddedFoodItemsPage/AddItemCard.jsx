const AddItemCard = ({ item, myItems, setMyItems }) => {
  return (
    <div className="h-auto">
      <div className="card h-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{item.foodName}</h2>
          <p>Description: {item.description}</p>
          <h3>Request made by {item.name}</h3>
          <div className="card-actions justify-end">
            <button className="btn btn-error">Delete Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemCard;
