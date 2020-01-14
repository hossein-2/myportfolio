import React, { Component } from "react";

class SubjectDescription extends Component {
  render() {
    return (
      <div className="card border-dark mb-3">
        <div className="card-header h5 ">Enter New Duty</div>
        <form className="mx-2">
          <div className="form-group ">
            <label htmlFor="subject">Subject</label>
            <input
              className=" form-control form-control-sm"
              type="text"
              name="subject"
              placeholder="Enter The Subject"
            />
            <div className="form-group mt-1">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                placeholder="Enter The Description"
              ></textarea>
            </div>
            <input type="submit" className="btn  btn-dark" value="Add Duty" />
          </div>
        </form>
      </div>
    );
  }
}

export default SubjectDescription;
