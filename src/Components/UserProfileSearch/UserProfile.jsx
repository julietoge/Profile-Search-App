// Importation statements
import { profiles } from "../UsersData";
import { useState } from "react";
import "./UserProfile.css";

// Functional component definition of UserProfileSearch
const UserProfileSearch = () => {
  // State variable(searchTerm) and function(searchTerm) declaration
  const [searchTerm, setSearchTerm] = useState("");
  // filtering of the profiles array based on the searchTerm state variable.
  const filteredProfiles = profiles.filter((profile) => {
    const fullName = `${profile.firstName} ${profile.lastName}`;
    if (searchTerm === "") {
      return profile;
    }
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  // UserProfileSearch Component rendering
  return (
    <div className="user-profile-container">
      <input
        type="search"
        placeholder="Search by name..."
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <div className="user-profiles">
        {filteredProfiles.map((person) => (
          <div key={person.id} className="user-profile">
            <div className="avatar">
              <img src={person.avatar} alt="pic" />
            </div>

            <div className="user-details">
              <div>{person.id}</div>
              <div>
                <span>{person.title}</span>&nbsp;
                <span>{person.firstName}</span>&nbsp;
                <span>{person.lastName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// Default export of UserProfileSearch component 
export default UserProfileSearch;
