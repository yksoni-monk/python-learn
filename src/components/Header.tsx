import React from 'react';

/**
 * Header component for the application
 * Displays the main title and branding
 */
export const Header: React.FC = () => {
  return (
    <div className="bg-white shadow-md p-4 border-b-4 border-purple-400">
      <h1 className="text-3xl font-bold text-center text-purple-600">
        🐍 Learn Python for Kids
      </h1>
    </div>
  );
};

