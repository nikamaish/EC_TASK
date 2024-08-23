import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Work = () => {
  const [githubProfile, setGithubProfile] = useState(null);
  
  const handleGitHubClick = () => {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
//  It allows you to parse and manipulate the query string of a URL.
    const code = urlParams.get('code');
    // it retrieves the value of the 'code' parameter.

    if (code) {
      axios.get(`http://localhost:5000/auth/github/callback?code=${code}`)
        .then(response => {
          setGithubProfile(response.data.userProfile);
        })
        .catch(error => {
          console.error('Error fetching GitHub profile:', error);
        });
    }
  }, []);

  return (
    <div>
      {githubProfile ? (
        <div>
          <h2>GitHub Profile</h2>
          <img src={githubProfile.avatar_url} alt="GitHub Avatar" width="100" />
          <p>Name: {githubProfile.name}</p>
          <p>Login: {githubProfile.login}</p>
          <p>Bio: {githubProfile.bio}</p>
          <p>Public Repos: {githubProfile.public_repos}</p>
          <p>Followers: {githubProfile.followers}</p>
          <p>Following: {githubProfile.following}</p>
        </div>
      ) : (
        <div className="flex space-x-4">
          <button
            onClick={handleGitHubClick}
            className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            GitHub
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </button>
          {/* <button className="flex items-center justify-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300">
            LeetCode
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </button>
          <button className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
            Medium
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Work;