import './App.css';

import { Button, Navbar } from 'react-daisyui';

function App() {
  return (
    <>
      <div className='flex w-full component-preview p-4 items-center justify-center gap-2 font-sans'>
        <Navbar>
          <Button className='text-xl normal-case' color='ghost'>
            daisyUI
          </Button>
        </Navbar>
      </div>
    </>
  );
}

export default App;
