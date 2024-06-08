import { useState } from "react";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block">
      {/* Dropdown toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
      >
        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            className="object-cover w-full h-full"
            alt="avatar"
          />
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
          onMouseLeave={() => setIsOpen(false)}
        >
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            View Profile
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Keyboard Shortcuts
          </a>
          <hr className="border-gray-200" />
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Company Profile
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Team
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Invite Colleagues
          </a>
          <hr className="border-gray-200" />
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Help
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
