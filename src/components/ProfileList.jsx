import React from "react";
import Profile from "./Profile";

const ProfileList = ({ profiles }) => {
  const profileList = profiles.map((profile) => {
    return <Profile profileInfo={profile} key={profile.id} />;
  });
  return <div>{profileList}</div>;
};

export default ProfileList;
