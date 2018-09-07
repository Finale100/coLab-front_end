import React, {Component} from 'react'

class UserCard extends Component {
  render() {
    return (
      // <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={this.props.user.img_url} />
          </div>
          <div className="content">
            <div className="header">{this.props.user.name}</div>
            <div className="meta">
              <a>{this.props.user.skill}</a>
            </div>
            <div className="description">
              {this.props.user.bio}
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              {this.props.user.availability ? 'Available' : 'Unavailable'}
            </span>
            <span>
              <i className="globe icon"></i>
              Location:
            </span>
          </div>
        </div>
      // </div>
    );
  }
}

export default UserCard;
