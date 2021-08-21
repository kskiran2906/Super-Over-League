const element = (
  <div className="background">
    <h1 className="d-md-none d-lg-none d-xl-none heading-1">
      Super Over League
    </h1>
    <h1 className="d-none d-md-block heading-2">Super Over League</h1>
    <div className="images_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
