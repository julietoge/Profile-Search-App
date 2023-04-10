import React from "react";
import { users } from "./UsersData";

const ProfileApp = () => {
  const peopleItems = users.map((person, index) => {
    return <li key={index}>{person}</li>;
  });

  return (
    <ul>{peopleItems}</ul>
  );
};

export default ProfileApp;
