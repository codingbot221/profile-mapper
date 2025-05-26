import React, { useState } from 'react';
import ProfileList from './pages/ProfileList';
import MapView from './components/MapView';
import AdminDashboard from './pages/AdminDashboard';
import profiles from './data/profiles.json';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <span className="font-bold">Profile Map App</span>
        <button onClick={() => setShowAdmin(!showAdmin)} className="bg-blue-500 px-3 py-1 rounded">
          {showAdmin ? "User View" : "Admin Dashboard"}
        </button>
      </nav>
      {showAdmin ? (
        <AdminDashboard />
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <ProfileList profiles={profiles} onSelect={setSelectedProfile} />
          </div>
          <div className="md:w-1/2 h-[400px] md:h-auto">
            <MapView profile={selectedProfile} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;