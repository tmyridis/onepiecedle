import MainPage from './components/Home/MainPage';
import { Outlet } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import useTime from './hooks/useTime';

function App() {
  const time = useTime();
  return (
    <div>
      <Navbar main={true} />
      <MainPage />
      <Outlet />
    </div>
  );
}

export default App;
