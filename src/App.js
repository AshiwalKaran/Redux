
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  const amount=useSelector(state=>state.amount)
  return (
    <>
      <button type='button' className='btn btn-primary' disabled={true}>Your Balance : {amount}</button>
      <Navbar/>
      <Shop/>
    </>
  );
}

export default App;
