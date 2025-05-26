import React from 'react';

const ProfileList = ({ profiles, onSelect }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Profiles</h1>
      {profiles.map((profile) => (
        <div key={profile.id} className="border p-4 mb-2 rounded shadow">
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p>{profile.description}</p>
          <button
            onClick={() => onSelect(profile)}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
          >
            View on Map
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;