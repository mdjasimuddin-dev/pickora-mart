import { Outlet } from 'react-router';
import Sidebar from '../../Components/Dashboard/Sidebar';

export default function Dashboard() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
