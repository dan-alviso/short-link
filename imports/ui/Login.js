import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login in to Short Link</h1>

        login form here

        <Link to="/signup">Don't yet have an account?</Link>
      </div>
    );
  }
}