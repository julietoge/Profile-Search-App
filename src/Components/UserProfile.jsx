import React from "react";
import { users } from "./UsersData";

const UserProfile = () => {
  const peopleItems = users.map((person, index) => {
    return (
      <div id="profileContainer">

        <div id="profileContent">

          <div id="userimg">
            <img
              src={person.picture}
              alt="pic"
              style={{ width: "42px", height: "42px" }}
            />
          </div>

          <div  id="userName">
            <div key={index}>{person.id}</div>
            <div>
              <span key={person.id}>{person.title}</span>&nbsp;
              <span key={person.id}>{person.firstName}</span>&nbsp;
              <span key={person.id}>{person.lastName}</span>
            </div>
          </div>
          
        </div>

      </div>
    );
  });

  return <div>{peopleItems}</div>;
};

export default UserProfile;
