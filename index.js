import React from 'react'
import ReactDOM from 'react-dom'
/*
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
ReactDOM.render(<HelloMessage name="Sebastian" />, document.getElementById('root'));
*/
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
        <div onClick={this.tick.bind(this)}>
          Clicks: {this.state.count}
        </div>
    );
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
ReactDOM.render(<Counter />, document.getElementById('root'));