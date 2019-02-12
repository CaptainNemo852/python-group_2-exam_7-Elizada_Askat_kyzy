import React, { Component } from 'react';
import './App.css';
import OrderForm from './Components/Order/OrderForm'


const availableFoods = [
  {name: 'Hamburger', price: 80, label: 'Hamburger'},
  {name: 'Cheeseburger', price: 90, label: 'Cheeseburger'},
  {name: 'Fries', price: 50, label: 'Fries'},
  {name: 'Coffee', price: 40, label: 'Coffee'},
  {name: 'Tea', price: 60, label: 'Tea'},
  {name: 'Cola', price: 45, label: 'Cola'}
];


class App extends Component {
  state = {
    foods: {
        Hamburger: {count: 0, total: 0},
        Cheeseburger: {count: 0, total: 0},
        Fries: {count: 0, total: 0},
        Coffee: {count: 0, total: 0},
        Tea: {count: 0, total: 0},
        Cola: {count: 0, total: 0}
    },
    total: 0
  };

  addFood = (name) => {
      console.log(name);


      let food = {...this.state.foods[name]};
      let price = availableFoods.find(item => item.name === name).price;
      food.count += 1;
      food.total = food.count * price;

      console.log(food);

      let foods = {...this.state.foods};

      foods[name] = food;

      let newState = {...this.state};
      newState.foods = foods;
      this.setState(newState);
      this.getPrice(newState)
  };



  getPrice = () => {
      return this.state.foods.Hamburger.total + this.state.foods.Cheeseburger.total + this.state.foods.Fries.total + this.state.foods.Coffee.total + this.state.foods.Tea.total + this.state.foods.Cola.total;
  };


  render() {
    return (
      <div className="container">
          <div className="row ">
              <div className="col-5 ">
                <p>Total : {this.getPrice()} KGS</p>
              <OrderForm add = {this.addFood}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;





  //я старалась но не смогла сделать все, прошу не отнимать много баллов если можете please))