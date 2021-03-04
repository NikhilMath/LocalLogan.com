'use strict';

// import FilterItem from "./FilterItem.js";

// const e = React.createElement;

class FilterColumn extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  listItems = this.props.items.map((item) =>
    (<FilterList name={item} key={item} filter={this.props.filter} />)
  )

  render() {
    return (
      <div>
        <div>
          <FilterList name={item} key={item} filter={this.props.filter} />
        {this.filterOptions[0]}
        </div>
        <div>
        {this.filterOptions[1]}
        </div>
        <div>
        {this.filterOptions[2]}
        </div>
      </div>
      // <ul>
      //   {this.listItems}
      // </ul>
    );
  }
}

// export default FilterList;