import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHouse, faBagShopping, faCube } from '@fortawesome/free-solid-svg-icons';

const Page_Sidebar = () => {
  return (
    <div className="flex">
      <div className="sidebar w-64 h-screen bg-gray-800 text-white p-4">
        <div className="sidebar__item mx-6 mt-4">
          <div className="logo flex items-center space-x-4 mb-6">
            <img
              src="https://dqy38fnwh4fqs.cloudfront.net/company/COMHQ7BA9GLL7K8683MNBGDOG66PBN/logo-1695017827473.webp"
              alt="logo"
              className="w-12 h-12"
            />
            <h1 className="text-3xl font-bold">PeerList</h1>
          </div>
          <ul className="space-y-10">
            <li className="flex items-center space-x-2 mt-10 hover:text-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faHouse} className="text-xl" />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faCube} className="text-xl" />
              <span>Projects</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faMessage} className="text-xl" />
              <span>Inbox</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
              <span>Jobs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page_Sidebar;
