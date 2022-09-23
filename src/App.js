
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
