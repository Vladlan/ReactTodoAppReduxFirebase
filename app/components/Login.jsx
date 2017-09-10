import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
    onLogin() {
      var {dispatch} = this.props;

      dispatch(actions.startLogin());
    },
    // render: function () {
    render() {
        return (

            <div>
                <div className="page-actions">
                    <a href="#" className="hidden1">Logout</a>
                </div>

                <h1 className="MainTitle">React Todo App</h1>

                <div className="callout callout-auth">
                    <h3>Login</h3>
                    <p>
                        Login with your GitHub account below.
                    </p>

                    <button className="button" onClick={this.onLogin}>Login With GitHub</button>
                </div>

            </div>

        );
    }
});
export default Redux.connect()(Login);