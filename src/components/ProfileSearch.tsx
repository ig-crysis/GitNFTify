import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ProfileSearchProps {
  onSearch: (username: string) => void;
}

export const ProfileSearch: React.FC<ProfileSearchProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const username = input.split('/').pop() || input;
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter GitHub profile URL or username"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
        />
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <button
          type="submit"
          className="absolute right-2 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate NFT
        </button>
      </div>
    </form>
  );
};