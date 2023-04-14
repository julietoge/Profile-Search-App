import React from 'react'
import UserProfile from './Components/UserProfile';
import SearchBar from './Components/SearchBar';
import './assets/style.css'

const ProfileSearchApp = () => {
  return (
    <main>
        <SearchBar />
        <UserProfile />
    </main>
  )
}

export default ProfileSearchApp;