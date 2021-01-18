import { all } from 'redux-saga/effects';
import connectionSaga from './ducks/connection/saga.js';

export default function* rootSaga() {
	yield all([
		connectionSaga()
	])
}