import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import WidgetList from './components/Widgets/WidgetList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="content">
        <div className="p-12">
          <WidgetList />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
