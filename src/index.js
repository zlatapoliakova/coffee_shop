import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import OurCoffee from './pages/our_coffee/OurCoffee';
import OurCoffeeItem from './pages/our_coffee_item/OurCoffeeItem';
import ForYourPleasure from './pages/for_your_pleasure/ForYourPleasure';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OurCoffee/>
  </React.StrictMode>
);