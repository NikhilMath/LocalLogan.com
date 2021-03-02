'use strict';

const e = React.createElement;

class RestaurantItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.item;
  }

  listTags(tags) {
    return tags.map((tag) =>
      e("li", {className: "tagItem", key:tag}, tag)
    )
  }
  
  render() {
    return e(
      "div", 
      {className:"restaurantItem", key:this.item.name},
      e("div", {className:"restaurantName"}, this.item.name),
      e("img", {className:"restaurantPic", src:this.item.pic}),
      e("ul", {className:"restaurantTags"}, this.listTags(this.item.tags))
    );
  }
}

export default RestaurantItem;