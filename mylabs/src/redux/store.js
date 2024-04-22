import { createStore } from 'redux';
import rootReducer from './reducers'; // Import the root reducer

const store = createStore(rootReducer);

export default store;
