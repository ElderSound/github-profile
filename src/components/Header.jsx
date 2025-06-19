import React, { useState } from 'react';
import SearchPreview from './SearchPreview';

const Header = ({ onType, onSearch, previewProfile, onSelect }) => {
  const [username, setUsername] = useState('');

  const handleChange = e => {
    const val = e.target.value;
    setUsername(val);
    onType(val.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim()) onSearch(username.trim());
  };

  return (
    <header className="relative w-full h-64 sm:h-72 lg:h-80">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero.png)' }}
      />

      <div className="relative z-10 flex flex-col items-center h-full w-[300px] md:w-[400px] mx-auto">
        <form onSubmit={handleSubmit} className="relative w-full max-w-md mt-12 mx-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="#CDD5E0"
              strokeWidth="2"
            />
            <path
              d="M20 20L17 17"
              stroke="#CDD5E0"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          

          <input
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Search GitHub username..."
            className="w-full pl-14 pr-14 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {/* Aquí aparece el preview justo debajo del input */}
        {previewProfile && (
          <SearchPreview profile={previewProfile} onSelect={onSelect} />
        )}
      </div>
    </header>
  );
};

export default Header;