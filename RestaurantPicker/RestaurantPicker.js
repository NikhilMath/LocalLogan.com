'use strict';
// routing https://www.pluralsight.com/guides/using-react-router-with-cdn-links
// import FilterList from "./FilterList.js";
// import RestaurantList from "./RestaurantList.js";


// const e = React.createElement;

function Restaurant(name, tags, pic, address="null") {
  this.name = name;
  this.tags = tags;
  this.pic = pic;
  this.address = address;
}

class RestaurantPicker extends React.Component {
  filterOptions = ["Mexican", "Chinese", "Indian", "24/7", "Alcohol", "Cafe", "Sushi", "Sit Down", "Fast Food", "Drive Thru", "Locally Owned", "Pastries"];
  restarauntOptions = [
    new Restaurant("Kneaders", ["Take Out", "Drive Thru"], "./kneaders.jpg", "1400 n, 200 west logan, ut"), 
    new Restaurant("Panda Express", ["Chinese"], "./panda.jpg"), 
    new Restaurant("Wok on Wheels", ["Chinese"], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("cafe sabor", ["Mexican", "Sit Down"], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("McDonalds", ["Fast Food", "24/7", "Drive Thru"], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Kabuki Japanese Steakhouse and Sushi Bar", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Denny's", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Ihop", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Formosa Restaurant", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("El Sol Mexican Restaurant", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Olive Garden", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Angie's", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Romo's Mediterranean Grill", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Buffalo Wild Wings", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Pizza Pie Cafe", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Texas Roadhouse", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Chili's Grill and Bar", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Mandarin Garden", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Tandoori Oven", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Juniper Take Out & Restaurant", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Jacks Wood-fire Pizza", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Bulls Head", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("The Italian Place", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Caffe Ibis", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Le Nonne", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("The Bluebird", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Center Street Grill", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("The White Owl", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Mo Bettah Steaks", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Chuck-a-rama", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("The Beehive Grill", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Herm's Inn", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Huhot Mongolian Grill", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Firehouse Pizzeria", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    //new Restaurant("Firehouse Pizzeria", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("La Tormenta", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Noodles and Company", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Old Grist Mill Bread", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Indian Oven", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Jamba Juice", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("KFC", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Little Caesars Pizza", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Arby's", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Black Pearl", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Rancherito's", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Burger King", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Carl's Jr.", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Cold Stone", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Factory Pizzeria", ["Alcohol"], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Fox's Pizza Den", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Papa Murphy's", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Subway", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Taco Bell", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Del Taco", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Taco Time", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Wendy's", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("Wingers", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    new Restaurant("restrauant", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    // new Restaurant("restrauant", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    // new Restaurant("restrauant", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
    // new Restaurant("restrauant", [], "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"),
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
    if (event.target.checked) {
      this.state.filters.push(val)
    } else {
      let index = this.state.filters.indexOf(val);
      this.state.filters.splice(index, 1);
    }
    this.filterRestaurants();
  }
  render() {
    // without using any additional dependencies:
    //https://medium.com/@chrislewisdev/react-without-npm-babel-or-webpack-1e9a6049714
    return (
      <div>
        <FilterList items={this.filterOptions} filter={(filter) => this.addFilter(filter)} />
        <RestaurantList items={this.state.restaurants}/>
      </div>
    );
  }
}

const domContainer = document.querySelector('#restaurantPicker');
ReactDOM.render(<RestaurantPicker />, domContainer);