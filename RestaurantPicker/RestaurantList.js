'use strict';

import RestaurantItem from "./RestaurantItem.js";

const e = React.createElement;

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
  }

  listItems() {
    return this.props.items.map((item) =>
      e(RestaurantItem,
        {item:item, key:item.name})
    )
  }

  render() {
    return e(
      "div",
      {className: "restaurantList bg-warning"},
      this.listItems()
    );
  }
}

export default RestaurantList;