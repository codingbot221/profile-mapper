import React, { useState } from 'react';
import profilesData from '../data/profiles.json';

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [newProfile, setNewProfile] = useState({
    name: '',
    description: '',
    location: { lat: '', lng: '' }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'lat' || name === 'lng') {
      setNewProfile({
        ...newProfile,
        location: { ...newProfile.location, [name]: parseFloat(value) }
      });
    } else {
      setNewProfile({ ...newProfile, [name]: value });
    }
  };

  const handleAdd = () => {
    const newEntry = { ...newProfile, id: Date.now() };
    setProfiles([...profiles, newEntry]);
    setNewProfile({ name: '', description: '', location: { lat: '', lng: '' } });
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>

      <div className="mb-4">
        <input
          name="name"
          value={newProfile.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 mr-2"
        />
        <input
          name="description"
          value={newProfile.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 mr-2"
        />
        <input
          name="lat"
          value={newProfile.location.lat}
          onChange={handleChange}
          placeholder="Latitude"
          type="number"
          className="border p-2 mr-2"
        />
        <input
          name="lng"
          value={newProfile.location.lng}
          onChange={handleChange}
          placeholder="Longitude"
          type="number"
          className="border p-2 mr-2"
        />
        <button onClick={handleAdd} className="bg-green-500 text-white px-3 py-1 rounded">
          Add Profile
        </button>
      </div>

      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="mb-2 border p-2 rounded shadow">
            <p className="font-semibold">{profile.name}</p>
            <p>{profile.description}</p>
            <p className="text-sm text-gray-600">Lat: {profile.location.lat}, Lng: {profile.location.lng}</p>
            <button
              onClick={() => handleDelete(profile.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;