import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const name = username.trim();
    if (name) onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto mt-6">
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Buscar usuario GitHub..."
        className="flex-1 bg-gray-800 text-white placeholder-gray-400 rounded-l-lg px-4 py-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white rounded-r-lg px-4 py-2 transition"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;