import React from 'react';

const Profile = ({ profile }) => (
    <section className="relative -mt-20 pt-20 pb-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start p-4">
            <div className="flex-shrink-0 -mt-20 md:-mt-20 z-20 rounded-xl">
                <img
                    src={profile.avatar_url}
                    alt={profile.login}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-xl border-8 border-[#21293a]"
                />
            </div>
            <div className="flex-1 mt-4 md:mt-0 md:ml-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Followers', 'Following', 'Location'].map((label, idx) => (
                    <div key={idx} className="bg-[#111729] bg-opacity-50 rounded-lg p-4 text-center flex justify-center space-x-2 item-center">
                        <div className="text-gray-400 text-xs">{label}</div>
                        <div className="text-white text-xs border-l border-gray-400 pl-2">
                            {label === 'Followers'
                                ? profile.followers
                                : label === 'Following'
                                    ? profile.following
                                    : profile.location || '—'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="max-w-5xl mx-auto mt-6 px-4 text-center md:text-left">
            <h2 className="text-3xl text-white">{profile.name || profile.login}</h2>
            <p className="text-gray-300 mt-2">{profile.bio}</p>
        </div>
    </section>
);

export default Profile;