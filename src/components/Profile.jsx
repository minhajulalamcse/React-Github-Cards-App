import React from "react";

const Profile = ({ profileInfo }) => {
  return (
    <div className="card">
      <div className="row">
        <div className="col s6 verticalLine">
          <img
            src={profileInfo.avatar_url}
            alt={profileInfo.name}
            className="responsive-img profilePic"
          />
          <h4 className="name">{profileInfo.name}</h4>
          <p>@{profileInfo.login}</p>
          {profileInfo.bio ? (
            <p>{profileInfo.bio}</p>
          ) : (
            <p>
              <i>No description provided</i>
            </p>
          )}
        </div>
        <div className="col s6 alignCenter info">
          <p>
            <b className="gitInfo">Public repos: {profileInfo.public_repos}</b>

            <b>Public gists: {profileInfo.public_repos}</b>
          </p>
          <p>
            <b className="gitInfo">Followers: {profileInfo.followers}</b>

            <b>Following: {profileInfo.following}</b>
          </p>

          <div className="links">
            {profileInfo.html_url ? (
              <a href={profileInfo.html_url}>
                <i className="fa fa-github black-text small"></i>
              </a>
            ) : null}

            {profileInfo.blog ? (
              <a href={profileInfo.blog}>
                <i className="fa fa-globe black-text small"></i>
              </a>
            ) : null}

            {profileInfo.email ? (
              <a href={profileInfo.email}>
                <i className="fa fa-envelope-o black-text small"></i>
              </a>
            ) : null}
          </div>
        </div>
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
