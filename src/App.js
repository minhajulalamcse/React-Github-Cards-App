import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";

class App extends Component {
  state = {
    profiles: [
      {
        login: "minhajulalamcse",
        id: 23008253,
        avatar_url: "https://avatars1.githubusercontent.com/u/23008253?v=4",
        html_url: "https://github.com/minhajulalamcse",
        type: "User",
        site_admin: false,
        name: "Minhajul Alam",
        company: null,
        blog: "https://www.linkedin.com/in/minhajulalam/",
        location: "Bangladesh",
        email: null,
        hireable: true,
        bio: "I am a Computer Science student from Bangladesh.",
        twitter_username: null,
        public_repos: 4,
        public_gists: 0,
        followers: 0,
        following: 3,
        created_at: "2016-10-23T05:36:03Z",
      },
    ],
  };
  render() {
    return (
      <div className="App container">
        <h3 className="heading indigo-text">Github Cards App</h3>
        <Profile profileInfo={this.state.profiles[0]} />
      </div>
    );
  }
}
export default App;
