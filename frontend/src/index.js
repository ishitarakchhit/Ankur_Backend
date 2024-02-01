import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {ChakraProvider} from '@chakra-ui/react'
import ChatProvider from './context/ChatProvider';
import persistStore from 'redux-persist/es/persistStore';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ChatProvider>
      <ChakraProvider>
      <App />
      </ChakraProvider>
    </ChatProvider>

);


