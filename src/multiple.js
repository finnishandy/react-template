import React from 'react'
import ReactDOM from 'react-dom'

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        );
    }
});

var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={'https://graph.facebook.com/' + this.props.username + '/picture'} />
        );
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <a href={'https://www.facebook.com/' + this.props.username}>
                {this.props.username}
            </a>
        );
    }
});

ReactDOM.render(
    <Avatar username="finnishandy" />,
    document.getElementById('root')
);
