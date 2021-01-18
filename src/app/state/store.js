import "regenerator-runtime/runtime";
import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './ducks';
import rootSaga from './rootSaga.js';

const sagaMiddleware = createSagaMiddleware();

function configureStore( initialState ) {
	const rootReducer = combineReducers( reducers );

	return (
		createStore(
			rootReducer,
			initialState,
			applyMiddleware(sagaMiddleware)
		)
	);
};

const store = configureStore();

sagaMiddleware.run(rootSaga)

export default store;
