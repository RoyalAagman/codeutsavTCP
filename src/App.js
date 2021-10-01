import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./First";
import Carouselk from './Components/carousel.js';
import Middlebody from './Components/midbody.js';
import Middtext from './Components/midtxt.js'
import Gridcards from './Components/midcard.js'
import Blockitem from './Components/blockit.js';
import './App.css';

function App() {
  return (
    <div>
      <div className="stylo1">
        <Navigation />
        <Carouselk />
      </div>
      <div className="stylo2">
        <Middlebody />
      </div>
      <div className="stylo3">
        <Middtext/>
      </div>
      <div className="stylo4"> 
          <Gridcards />
      </div>
      <div className="stylo5">
        <Blockitem />
      </div>
    </div>
      
  )
}

export default App;
