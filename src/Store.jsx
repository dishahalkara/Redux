import { createStore } from 'redux';
import rootreducer from './Rootreducer';
let store=createStore(rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSIONS__&& window.__REDUX_DEVTOOLS_EXTENSIONS__());
    export default store;