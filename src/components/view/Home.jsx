import React from 'react'
import Header from '../home/Header'
import LogoList from '../home/LogoList'
import SwitchingEnergy from '../home/SwitchingEnergy'
import SwitchSteps from '../home/SwitchSteps'
import UtilityComparisons from '../home/UtilityComparisons'
import Testimonials from '../home/Testimonials'
import Utilities from '../home/Utilities'
function Home() {
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
  )
}

export default Home