import React from "react";

const initialState = {
  firstname: "",
  secondname: "",
  email: "",
  phonenumber: "",
  nameError: "",
  emailError: "",
  
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.firstname) {
      nameError = "first name cannot be blank";
    }
    if (!this.state.secondname) {
      nameError = "second name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
      
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <h1> Enter details </h1>
          <input
            name="firstname"
            placeholder="first name"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="secondname"
            placeholder="last name"
            value={this.state.secondname}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            name="phonenumber"
            placeholder="phone number"
            value={this.state.phonenumber}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        
        <button type="submit">submit</button>
      </form>
    );
  }
}
