import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//react-router-dom setup
import { BrowserRouter } from 'react-router-dom';
//Material ui  setup
//For the material theme to work
import { createTheme,ThemeProvider } from '@mui/material';
//Redux setup
import { Provider } from 'react-redux';
//The store represents the entire state of the app
import store from './app/store'
const theme = createTheme({});

ReactDOM.render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
