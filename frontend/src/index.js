import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './modules/root/reducer';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Raleway', sans-serif;
    min-height: 100%;
    margin: 0;
    padding: 0; 
  }
`

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>            
    <App />
  </Provider>, 
  document.getElementById('root')
);

if (module.hot) {                                       
  module.hot.accept('./components/App', () => {                    
     const NextApp = require('./components/App').default;
     ReactDOM.render(
        <Provider store={store}><NextApp /></Provider>,
        document.getElementById('root')
     );
  });

  module.hot.accept('./modules/root/reducer', () => {                  
    const nextRootReducer = require('./modules/root/reducer').default;
    store.replaceReducer(nextRootReducer);             
  });
}

registerServiceWorker();
