import React from "react";
import { users } from "./UsersData";

const ProfileApp = () => {
  const peopleItems = users.map((person, index) => {
    return (
      <p>
        <span key={person.id}>{person.title}</span>&nbsp;
        <span key={person.id}>{person.firstName}</span>
        <span key={person.id}>{person.lastName}</span>
        <img
          src={person.picture}
          alt="pic"
          style={{ width: "32px", height: "32px" }}
        />
      </p>
    );
  });

  return <div>{peopleItems}</div>;
};

export default ProfileApp;
