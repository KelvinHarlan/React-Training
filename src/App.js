import React from 'react';
import './App.css';
import Search from './components/nav/search'
import Title from './components/title/Title'
import MainFood from './components/main/Mainfood/MainFood.jsx';
import MainLunch from './components/main/Mainlunch/Mainlunch';
import MainIce from './components/main/Mainice/Mainice.jsx'
import Maincakes from './components/main/Maincakes/Maincakes';
import FoodOption from './components/main/Foodoptions/Foodoptions.jsx'

function App() {
  return (
    <div className="App">
      <Title />
      <Search />
      <div className='main-container'>
        <MainFood nome='Food' />
        <MainLunch nome='Lunch' />
        <MainIce nome='Ice' />
        <Maincakes nome="Cakes" />


      </div>
      <h2 className='food-menu'>Food Menu</h2>
      <div className='food-box'>
        <FoodOption option='Pizzas' />
        <FoodOption option='Hot Dogs' />
        <FoodOption option='hamburgers' />
        <FoodOption option='Fries' />
      </div>
    </div>

  );
}

export default App;
