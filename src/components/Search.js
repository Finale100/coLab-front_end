import React, {Component} from 'react'

class Search extends Component {
  render() {
    return (
      <React.Fragment>
      {/* <h1 id='main-page-title'>Find</h1> */}
      <div className='form'><h3>Find the project or team you're looking for...</h3>
        <div className="ui large icon input">
          <input
            type="text"
            placeholder='Seach'
            onChange={this.props.onChangeHandler}
            value={this.props.value}
          />
          <i className="search icon" />
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Search;
