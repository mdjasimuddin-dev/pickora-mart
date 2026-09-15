import { Outlet } from 'react-router';
import Sidebar from '../../Components/Dashboard/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex gap-10">
      <div>
        <Sidebar />
      </div>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
}
