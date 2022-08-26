import './App.css';
import './styles/landingpage.css'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Fitur from './components/Fitur'
import Paketharga from './components/Paketharga';
import Order from './components/Order';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <div className="myBG">
      <Intro />
      </div>
      <div>
      <Navbar />
      <Fitur />
      <Paketharga />
      <Order />
      <Footer />
      </div>   
    </div>
  )
}

export default App;
