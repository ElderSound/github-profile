import React from 'react';

const SearchPreview = ({ profile, onSelect }) => (
    //console.log("profile", profile),
    <div className="w-full mx-auto mt-2">
        <div
            className="flex items-center bg-[#111729] bg-opacity-75 rounded-lg p-2 cursor-pointer"
            onClick={() => onSelect(profile.login)}>
            <img
                src={profile.avatar_url}
                alt={profile.login}
                className="w-12 h-12 rounded-lg border-2 border-white"
            />
            <div className="ml-4 text-white">
                <h4 className="text-lg ">{profile.name || profile.login}</h4>
                <p className="text-gray-400 text-sm truncate">{profile.location}</p>
            </div>
        </div>
    </div>
);

export default SearchPreview;