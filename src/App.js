import React from 'react';
import './App.css';
import Search from './components/nav/search'
import Title from './components/title/Title'
import MainFood from './components/main/Mainfood/MainFood.jsx';
import MainLunch from './components/main/Mainlunch/Mainlunch';
import MainIce from './components/main/Mainice/Mainice.jsx'
import Maincakes from './components/main/Maincakes/Maincakes';
import FoodOption from './components/main/Foodoptions/Foodoptions.jsx';
import Mainfixed from './components/main/Mainfixed/Mainfixed';



function App() {
  return (
    <div className="App">
      <Title />
      <Search />
      <div className='box-container'>
      <div className='main-container'>
        <MainFood nome='Food' />
        <MainLunch nome='Lunch' />
        <MainIce nome='Ice' />
        <Maincakes nome="Cakes" />
      </div>
      <h2 className='food-menu'>Food Menu</h2>
      <div className='food-box'>
        <FoodOption option='Pizzas' bg='pizzas' />
        <FoodOption option='Hot Dogs' bg='hotdogs' />
        <FoodOption option='hamburgers' bg='hamburgers' />
        <FoodOption option='Fries' bg='fries' />

      </div>

      <div className='menu-fixed-container'>
        <Mainfixed />
      </div>
    </div>
      </div>

  );
}

export default App;
