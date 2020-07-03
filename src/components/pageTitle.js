import React, {Component} from 'react';

class PageTitle extends Component {
  render () {
    const {className, title} = this.props;
    return (
      <div className={`${className} page-title`}>
        Login
      </div>
    );
  }
}
export default PageTitle;
