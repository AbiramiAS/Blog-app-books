import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
      <>
        <div className="container mx-auto bg-gray-800/70">
          <Header />
          <Outlet />
        </div>
      </>
    );
}

export default Layout