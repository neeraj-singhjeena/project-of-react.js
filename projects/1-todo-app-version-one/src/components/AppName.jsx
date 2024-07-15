function AppName() {
  let TodoName = "Buy Milk";
  let TodoDate = "4/10/2023";

  return (
    <div className="row">
      <div className="col-4">{TodoName}</div>
      <div className="col-4">{TodoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}
export default AppName;
