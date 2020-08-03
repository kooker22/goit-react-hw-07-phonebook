import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  // persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook/phonebook-reducer';

const persistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter']
};


const store = configureStore({
  reducer: {
    phonebook:  persistReducer(persistConfig, phonebookReducer)
   
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
// const persistor = persistStore(store);
export default  store;
