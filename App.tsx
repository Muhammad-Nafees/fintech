import {Provider} from 'react-redux';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import {persistor, store} from './src/reduxTk/store';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './src/navigators';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
