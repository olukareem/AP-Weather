import React from "react";
import "./form.style.css";

const Form = (props) => {
  return (
    <div className="container-fluid">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.loadweather()
      }
      }>
        <div className="row">
          <div className="form-container col-md-4 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="citySearch"
              autoComplete="off"
              placeholder="City"
              onChange={props.handleChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="countrySearch"
              autoComplete="off"
              placeholder="Country"
              onChange={props.handleChange}
            />
          </div>
          <span className="col-md-4 ">
            <button className="btn btn-warning">Submit</button>
          </span>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country
    </div>
  );
}



export default Form;
