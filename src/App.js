import React, { Component } from "react";
import "./App.css";
import ProfileList from "./components/ProfileList";
import AddProfile from "./components/AddProfile";
import axios from "axios";
class App extends Component {
  state = {
    profiles: [],
  };

  addProfile = ({ username }) => {
    axios
      .get("https://api.github.com/users/" + username)
      .then((res) => {
        const profiles = [...this.state.profiles, res.data];
        this.setState({
          profiles,
        });
      })
      .catch((err) => alert(username + " profile not found."));
  };
  render() {
    return (
      <div className="App container">
        <h3 className="heading indigo-text">Github Cards App</h3>
        <AddProfile
          addProfile={this.addProfile}
          profiles={this.state.profiles}
        />
        <ProfileList profiles={this.state.profiles} />
      </div>
    );
  }
}
export default App;
