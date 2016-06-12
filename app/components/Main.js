var React = require('react');

var Main = React.createClass({
  render () {
    return (
      <div>
        <div className="text-center">Nav</div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
