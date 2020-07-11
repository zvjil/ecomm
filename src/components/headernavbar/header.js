import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render () {
    return (
      <div className="header">
        <img src="http://via.placeholder.com/50x50" />

        <div className="header__links">
          {this.props.headerLinks.map ((link, index) => {
            return (
              <a
                className={`header__link ${link.active ? 'green-text' : ''}`}
                key={index}
                onClick={() => this.handleOnClick (link)}
              >
                {link.title}
              </a>
            );
          })}
        </div>

      </div>
    );
  }
}

function mapStateToProps (state) {
  const {headerLinks, onClick} = state.headerNavbar;
  return {
    headerLinks,
    onClick,
  };
}

Header = connect (mapStateToProps, actions) (Header);

export default Header;
