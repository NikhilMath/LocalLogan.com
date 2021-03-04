'use strict';

// import FilterItem from "./FilterItem.js";

// const e = React.createElement;

class FilterColumns extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  listColumns() {
    return this.props.items.map((item) =>
      (<div className="col-sm-4">
        <FilterList name={item[0]} items={item[item[0]]} filter={this.props.filter} />
      </div>)
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <FilterList name={this.props.items[0][0]} items={this.props.items[0][this.props.items[0][0]]} filter={this.props.filter} />
        </div>
        <div className="col-sm-4">
          <FilterList name={this.props.items[1][0]} items={this.props.items[1][this.props.items[1][0]]} filter={this.props.filter} />
        </div>
        <div className="col-sm-4">
          <FilterList name={this.props.items[2][0]} items={this.props.items[2][this.props.items[2][0]]} filter={this.props.filter} />
        </div>
       {/* {this.listColumns()} */}
      </div>
      // <ul>
      //   {this.listItems}
      // </ul>
    );
  }
}

// export default FilterList;