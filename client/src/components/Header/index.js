import React from 'react';
import AddWidgetButton from './AddWidgetButton';
import RefreshButton from './RefreshButton';
import SaveButton from './SaveButton';

const Header = () => {
  return (
    <nav className="border-b-2 border-gray-100 py-1">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <AddWidgetButton />
            <SaveButton />
            <RefreshButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
