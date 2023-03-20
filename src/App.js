import './App.css';
import Customer from './components/customer/Customer';
import Details from './components/customer/Details';
import Download from './components/download/Download';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import Future from './components/future/Future';
import Hero from './components/hero/Hero';

function App() {
  return (
    <>
      <Hero />
      <Customer />
      <Details />
      <Future />
      <Featured />
      <Download />
      <Footer />
    </>
  );
}

export default App;
