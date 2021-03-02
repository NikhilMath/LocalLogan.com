'use strict';

const e = React.createElement;

class FilterItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return e(
      "li",
      { className:"filterItem  bg-danger",
      key: this.name },
      e("input",
      { type:"checkbox",
        className:"filterItemCheckbox ",
        name:this.name,
        onChange: this.props.filter
      }),
      e("label", {htmlFor: this.name}, this.name)
    );
  }
}

export default FilterItem;