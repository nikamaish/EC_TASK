import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Work = () => {

  const handleGitHubClick = () => {
    const githubId = prompt("Please enter your GitHub ID:");
    if (githubId) {
      // Redirect to GitHub OAuth authorization URL or initiate the authorization process
      window.location.href = `https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&scope=repo&login=${githubId}`;
    }
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleGitHubClick}
        className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        GitHub
        <FontAwesomeIcon icon={faPlus} className="ml-2" />
      </button>
      <button className="flex items-center justify-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300">
        LeetCode
        <FontAwesomeIcon icon={faPlus} className="ml-2" />
      </button>
      <button className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
        Medium
        <FontAwesomeIcon icon={faPlus} className="ml-2" />
      </button>
    </div>
  );
};

export default Work;
