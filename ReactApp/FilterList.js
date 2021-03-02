'use strict';

// import FilterItem from "./FilterItem.js";

const e = React.createElement;

class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  listItems = this.props.items.map((item) =>
    (<FilterItem name={item} key={item} filter={this.props.filter} />)
  )

  render() {
    return (
      <ul>
        {this.listItems}
      </ul>
    );
  }
}

// export default FilterList;