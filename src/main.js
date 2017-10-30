var React = require('react');
var ReactDOM = require('react-dom');

var Content = React.createClass({
    render: function() {
        return (
        <div>
          <b>Hello world</b>
        </div>
        );
    }
});
ReactDOM.render(<Content />, document.getElementById('content'));
