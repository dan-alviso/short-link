import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {
  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button 
          onClick={() => 
            Accounts.logout()
          }
        >
          Logout
        </button>
      </div>
    );
  }
}