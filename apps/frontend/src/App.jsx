import MainPage from './components/Home/MainPage';
import { Outlet } from 'react-router-dom';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <div>
      <Navbar main={true} />
      <MainPage />
      <Outlet />
    </div>
  );
}

export default App;
