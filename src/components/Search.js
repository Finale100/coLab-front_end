import React, {Component} from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <div className="ui large icon input">
          <input
            type="text"
            onChange={this.props.onChangeHandler}
            value={this.props.value}
          />
          <i className="search icon" />
        </div>
      </div>
    );
  }
}

export default Search;
