import React from 'react'
import ReactDOM from 'react-dom'

var Menu = React.createClass({
    render: () => {
        var menus = ['Home',
            'About',
            'Services',
            'Portfolio',
            'Contact us']
        return (
            <div>
                {menus.map(function(v,i){
                    return <div key={i}><Link label={v}/></div>
                })}
            </div>
        )
    }
})

var Link = React.createClass({
    render: function () {
        var url='/'
            + this.props.label
                .toLowerCase()
                .trim()
                .replace(' ', '-')
        return React.createElement('div',
            null,
            React.createElement(
                'a',
                {href: url},
                this.props.label
            ),
            React.createElement('br')
        )
    }
})

ReactDOM.render(   React.createElement(     Menu,     null   ),   document.getElementById('menu') )

