import './App.css';
import Header from './components/Header'
import LogoList from './components/LogoList';
import SwitchingEnergy from './components/SwitchingEnergy';
import SwitchSteps from './components/SwitchSteps';
import UtilityComparisons from './components/UtilityComparisons';
function App() {
  return (
    <div>
     <Header/>
     <LogoList/>
     <SwitchingEnergy/>
     <SwitchSteps/>
     <UtilityComparisons/>
    </div>
  );
}

export default App;
