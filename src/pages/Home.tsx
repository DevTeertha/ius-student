import HomeComponent from '../components/home/HomeComponent';
import NavbarComponent from '../components/navbar/NavbarComponent';

function Home() {
  return (
    <>
      <NavbarComponent />
      <div className='container px-5 py-5'>
        <HomeComponent />
      </div>
    </>
  );
}

export default Home;
