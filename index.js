import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero/hero.jsx';
import Header from './components/Header/header.jsx';
import Sandbox from './components/Sandbox/sandbox.jsx';

ReactDOM.render(<Hero />, document.getElementById('smsForm'));
ReactDOM.render(<Header />, document.getElementById('topHeader'));
ReactDOM.render(<Sandbox />, document.getElementById('sandbox'));
