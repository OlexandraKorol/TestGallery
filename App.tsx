import React from 'react';
import Navigation from './src/Navigation';
import { Provider } from "react-redux";
import {store} from './store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
     </Provider>
  );
}

export default App;
