import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
// import Currency from './components/Currensy';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  );
}

export default App;
