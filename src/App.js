import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WorkingProcess from './components/WorkingProcess';
import Varieties from './components/Varieties';
import Checkout from './components/Checkout';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-Poppins overflow-hidden'>
      <Navbar />
      <Banner />
      <WorkingProcess />
      <Varieties />
      <Checkout />
      <Download />
      <Footer/>
    </div>
  );
}

export default App;
