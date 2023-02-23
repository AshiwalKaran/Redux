
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <>
      <button type='button' className='btn btn-primary' disabled={true}>Your Balance : 0</button>
      <Navbar/>
      <Shop/>
    </>
  );
}

export default App;
