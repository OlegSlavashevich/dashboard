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
        <div className="content p-12">
          <WidgetList />
        </div>
      </WidgetProvider>
    </QueryClientProvider>
  );
}

export default App;
