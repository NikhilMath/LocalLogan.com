'use strict';

import FilterList from "./FilterList.js";
import RestaurantList from "./RestaurantList.js";


const e = React.createElement;

function Restaurant(name, tags, pic) {
  this.name = name;
  this.tags = tags;
  this.pic = pic;
}

class RestaurantPicker extends React.Component {
  filterOptions = ["mexican", "chinese", "take out", "24/7", "indian"];
  restarauntOptions = [
    new Restaurant("Kneaders", ["take out"], "./kneaders.jpg"), 
    new Restaurant("Panda Express", ["chinese", "take out"], "./panda.jpg"), 
    new Restaurant("Wok on Wheels", ["chinese", "take out", "24/7"], "./kneaders.jpg"),
    new Restaurant("cafe sabor", ["mexican", "indian"], "./kneaders.jpg"),
    new Restaurant("McDonalds", ["mexican", "indian"], "./kneaders.jpg"),
  ];

  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      filters: [],
      restaurants: this.restarauntOptions
    };
    // console.log("rp:", this)
    // this.addFilter = this.addFilter.bind(this);
  }
 
  filterRestaurants() {
    console.log("HERER")
    this.setState(
      {restaurants:
      this.restarauntOptions.filter(item => {
        return this.state.filters.every((filter) => {
          return item.tags.includes(filter);
        })
      })}
    )
  }
  addFilter(event) { // can use arrow instead of binding anywhere....
    // if selected push
    // else remove
    let val = event.target.name;
    console.log(val);
    console.log(event)
    if (event.target.checked) {
      console.log("box is true. should be added.");
      this.state.filters.push(val)
      console.log(this.state.filters);
    } else {
      console.log("box is untrue. should be removed.");
      let index = this.state.filters.indexOf(val);
      this.state.filters.splice(index, 1);
      console.log(this.state.filters);
    }
    this.filterRestaurants();
  }
  render() {
    console.log("rendering:",this);
    // console.log(this.restaurants);
      
    // if (this.state.liked) {
    //   return 'You liked this.';
    // }
    // without using any additional dependencies:
//https://medium.com/@chrislewisdev/react-without-npm-babel-or-webpack-1e9a6049714
    return e(
      'div',
      null,
      e(FilterList, 
        {
          items : this.filterOptions,
          filter : (filter) => this.addFilter(filter)
        }
      ),
      e(RestaurantList,
        {
          items : this.state.restaurants
        } 
      )
    );
    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );
  }
}

const domContainer = document.querySelector('#restaurantPicker');
ReactDOM.render(e(RestaurantPicker), domContainer);