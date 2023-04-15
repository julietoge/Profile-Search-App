import React from "react";
import { users } from "./UsersData";
import { useState } from "react";

const UserProfile = () => {

  const [searchInput, setSearchInput] = useState("");

  const usersItem = users.filter((user) => {

    if (searchInput === "") {
      return user;
    } else if (
      user.id.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return user;
    } else if (
      user.title.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return user;
    } else if (
      user.firstName.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return user;
    } else if (
      user.lastName.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return user;
    }
  });

  const peopleItems = usersItem.map((person) => {
    return (
      <div id="profileContainer">

        <div key={person.id} id="profileContent">

          <div id="userimg">
            <img
              src={person.picture}
              alt="pic"
              style={{ width: "42px", height: "42px" }}
            />
          </div>

          <div id="userName">
            <div>{person.id}</div>
            <div>
              <span>{person.title}</span>&nbsp;
              <span>{person.firstName}</span>&nbsp;
              <span>{person.lastName}</span>
            </div>
          </div>

        </div>

      </div>
    );
  });

  return (
    <>
      <div id="searchContent">
        <input
          type="search"
          id=""
          placeholder="Search by name"
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>

      <div>{peopleItems}</div>
    </>
  );
};

export default UserProfile;
