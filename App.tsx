import {Provider} from 'react-redux';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import {persistor, store} from './src/reduxTk/store';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './src/navigators';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes/>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
