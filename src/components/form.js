import React from "react";

class Form extends React.Component {
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: ""
  };

  // handlechange
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //onSubmit
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { FirstName, LastName, Email, Password } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="form-group">
          {/* <label>First Name: </label> */}
          <input
            name="FirstName"
            type="text"
            size="sm"
            className="form-control"
            placeholder="First Name"
            onChange={this.handleChange}
            value={FirstName}
          />{" "}
          <br />
        </div>
        <div className="form-group">
          {/* <label>Last Name: </label> */}
          <input
            name="LastName"
            type="text"
            size="sm"
            className="form-control"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={LastName}
          />{" "}
          <br />
        </div>
        <div className="form-group">
          {/* <label>Email: </label> */}
          <input
            name="Email"
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={this.handleChange}
            value={Email}
          />{" "}
          <br />
        </div>
        <div className="form-group">
          {/* <label>Password: </label> */}
          <input
            name="Password"
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={this.handleChange}
            value={Password}
          />{" "}
          <br />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => alert("user created ")}
        >
          Create
        </button>
        <button
          className="btn btn-primary"
          onClick={() => alert("user canceled")}
        >
          Cancel
        </button>
      </form>
    );
  }
}

export default Form;
