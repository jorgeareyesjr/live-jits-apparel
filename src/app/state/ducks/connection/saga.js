
import { takeLatest, /* call, */ put } from 'redux-saga/effects';
import types from './types.js';
import actions from './actions';

function* testSaga({ type, payload }) {
	try {
		yield put(actions.testConnectionInProgress(true));

		// const resource = `someUrl`;
		// const response = yield call(fetch, resource);

		// if (response) {
		// 	console.log("Connection response:", response);

		// 	yield put(actions.testConnectionSucceeded(response));
		// }

		// To test out Error messaging.
		throw new Error("Unable to connect.");

	} catch (error) {
		console.log("Connection error:", error);

		yield put(actions.testConnectionFailed(error));
	} finally {
		yield put(actions.testConnectionInProgress(false));
	}
}

export default function* saga() {
	yield takeLatest(types.TEST_CONNECTION, testSaga);
};
