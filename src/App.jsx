import './App.css';
import PreHome from './components/BeforeLogin/PreHome';
import Footer from './components/BeforeLogin/Footer';
import Header from './components/BeforeLogin/Header';
import FaQ from './components/Commons/FaQ';

function App() {

  return (
    <div className='w-full lg:max-w-[1300px] 2xl:max-w-[1500px] h-full  '> 
    <Header />
    <PreHome />
    <FaQ />
    <Footer />
    </div>
  )
}

export default App
