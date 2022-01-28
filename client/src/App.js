import './App.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import WidgetList from './components/Widgets/WidgetList';
import { WidgetProvider } from './contexts/WidgetContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WidgetProvider>
        <Header />
        <div className="content">
          <div className="p-12">
            <WidgetList />
          </div>
        </div>
      </WidgetProvider>
    </QueryClientProvider>
  );
}

export default App;
