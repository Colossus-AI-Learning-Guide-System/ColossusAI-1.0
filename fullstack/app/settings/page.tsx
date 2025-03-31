'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-500">
            Manage your account settings and set your preferences.
          </p>
        </div>

        {/* Profile Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Profile</h2>
            <p className="text-sm text-gray-500">
              Update your profile information and manage your account.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                placeholder="your-username"
                className="block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                defaultValue=""
              />
              <p className="text-sm text-gray-500">
                This is your public display name.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                placeholder="example@domain.com"
                type="email"
                className="block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                defaultValue=""
              />
              <p className="text-sm text-gray-500">
                Your email address will be used for notifications.
              </p>
            </div>

            {/* <div className="space-y-2">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder="Brief description for your profile."
                className="block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
              />
              <p className="text-sm text-gray-500">
                Brief description for your profile.
              </p>
            </div> */}

            <button className="rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-900">
              Update Profile
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Preferences</h2>
            <p className="text-sm text-gray-500">
              Customize your application experience.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
                Theme
              </label>
              <select
                id="theme"
                className="block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
              <p className="text-sm text-gray-500">
                Select your preferred theme for the application.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Push Notifications
                </label>
                <p className="text-sm text-gray-500">
                  Receive notifications about important updates.
                </p>
              </div>
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={pushNotifications}
                onChange={(e) => setPushNotifications(e.target.checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Updates
                </label>
                <p className="text-sm text-gray-500">
                  Receive updates about our product via email.
                </p>
              </div>
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={emailUpdates}
                onChange={(e) => setEmailUpdates(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
