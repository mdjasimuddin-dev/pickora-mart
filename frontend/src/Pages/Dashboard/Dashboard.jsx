import { Outlet } from 'react-router';
import Sidebar from '../../Components/Dashboard/Sidebar';

export default function Dashboard() {
  const userRole = localStorage.getItem('role');
  return (
    <div className="flex gap-10">
      <div>
        <Sidebar role={userRole} />
      </div>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
}
