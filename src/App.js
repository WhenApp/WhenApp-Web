import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>When</h2>
        </div>
        <div className="container-fluid">
          <p className="App-playBtn">
            <a href='https://play.google.com/store/apps/details?id=tech.akpmakes.android.taskkeeper&utm_source=WhenApp-Web&utm_campaign=Web-Marketing&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="img-fluid" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
          </p>
          <p className="App-footer">
            <a href='/privacy'>Privacy Policy</a> | Google Play and the Google Play logo are trademarks of Google Inc.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
