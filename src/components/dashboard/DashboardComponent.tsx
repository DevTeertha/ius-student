import { Link } from 'react-router-dom';
import HomeComponent from '../home/HomeComponent';
import NavbarComponent from '../navbar/NavbarComponent';

function DashboardComponent() {
  return (
    <>
      <NavbarComponent />
      <div className='container px-5 py-5'>
        <HomeComponent showAdminActionButton={true}>
          <div className='text-end'>
            <Link to={'/students/add'}>
              <button className='btn btn-dark bg-gray-800 text-white hover:bg-gray-900 hover:text-white w-4/5'>Add Student</button>
            </Link>
          </div>
        </HomeComponent>
      </div>
    </>
  );
}

export default DashboardComponent;
