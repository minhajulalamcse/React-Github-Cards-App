import React, { Component } from "react";

class AddProfile extends Component {
  state = {
    username: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username === "") {
      return alert("Enter github username");
    }
    const filteredProfiles = this.props.profiles.filter((profile) => {
      return profile.login === this.state.username;
    });
    if (filteredProfiles.length) {
      return alert(this.state.username + " profile already added in the list.");
    }
    this.props.addProfile(this.state);
    this.setState({
      username: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="row">
          <div className="col s9">
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Enter username ex. minhajulalamcse"
            />
          </div>
          <div className="col s3">
            <button className="btn indigo white-text">Add Profile</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProfile;
