import React from "react";

const Profile = ({ profileInfo }) => {
  return (
    <div className="card">
      <div className="row">
        <div className="col s4 verticalLine">
          <img
            src={profileInfo.avatar_url}
            alt={profileInfo.name}
            className="responsive-img profilePic"
          />
          <h4 className="name">{profileInfo.name}</h4>
          <p>@{profileInfo.login}</p>
          <p>{profileInfo.bio}</p>
        </div>
        <div className="col s8 alignCenter">
          <p>
            <b className="gitInfo">Public repos: {profileInfo.public_repos}</b>

            <b>Public repos: {profileInfo.public_repos}</b>
          </p>
          <p>
            <b className="gitInfo">Followers: {profileInfo.followers}</b>

            <b>Following: {profileInfo.following}</b>
          </p>

          <div className="links">
            <a href={profileInfo.html_url}>
              <i className="fa fa-github black-text small"></i>
            </a>
            <a href={profileInfo.blog}>
              <i className="fa fa-globe black-text small"></i>
            </a>
            <a href={profileInfo.email}>
              <i className="fa fa-envelope-o black-text small"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="card-action">
        <a
          href={profileInfo.email}
          className="btn btn-large indigo darken-2 white-text hireable"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Profile;

// avatar_url  html_url public_repos created_at
// name        blog     public_gists
// login       email    followers
// bio         hireable following
//             location
