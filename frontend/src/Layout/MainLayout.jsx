import Footer from '../Components/HeaderFooter/Footer';
import Header from '../Components/HeaderFooter/Header';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
