import React from 'react';
import ReactDOM from 'react-dom';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('app'))
