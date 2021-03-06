// @flow
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'containers/App';
import store from 'store';

const renderApp = (Component: React.ComponentType<any>) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Route component={Component} />
        </AppContainer>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('containers/App', () => renderApp(App));
}
