import { ChakraProvider } from '@chakra-ui/react';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
