'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Sample name',
    email: 'samplename@gmail.com',
    username: 'Samplename',
  });
  const router = useRouter(); // Next.js router for navigation

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Update the backend logic here
  };

  const navigateToSettings = () => {
    router.push('/settings'); // Navigate to the settings page
  };

  return (
    <div className="container mx-auto py-10">
      <div className="w-[400px] h-[400px] max-w-2xl mx-auto bg-white shadow-lg rounded-3xl p-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4">My Account</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="settings-input rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="settings-input rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="settings-input rounded-lg"
                />
              </div>
            </div>
          </form>
        </main>
        <footer className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={navigateToSettings}
            className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-lg"
          >
            Go to Settings
          </button>
          <div className="space-x-4">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-lg"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-lg"
              >
                Edit Profile
              </button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
