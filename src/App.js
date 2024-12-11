import './App.css';
import Header from './components/Header'
import LogoList from './components/LogoList';
import SwitchingEnergy from './components/SwitchingEnergy';
import SwitchSteps from './components/SwitchSteps';
import Testimonials from './components/Testimonials';
import Utilities from './components/Utilities';
import UtilityComparisons from './components/UtilityComparisons';
function App() {
  return (
    <div>
     <Header/>
     <LogoList/>
     <SwitchingEnergy/>
     <SwitchSteps/>
     <UtilityComparisons/>
     <Utilities/>
     <Testimonials/>
    </div>
  );
}

export default App;
