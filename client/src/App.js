import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
// import Currency from './components/Currensy';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {JSON.stringify(process.env, null, 2)}
    </QueryClientProvider>
  );
}

export default App;
