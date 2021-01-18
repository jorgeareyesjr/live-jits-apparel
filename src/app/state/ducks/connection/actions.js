import types from './types.js';

const ACTION_CREATORS = {
	// Test connection.
	testConnection: (payload) => {
		return {
			type: types.TEST_CONNECTION,
			payload,
		};
	},
	testConnectionInProgress: (payload) => {
		return {
			type: types.TEST_CONNECTION_IN_PROGRESS,
			payload,
		};
	},
	testConnectionFailed: (payload) => {
		return {
			type: types.TEST_CONNECTION_FAILED,
			payload,
		};
	},
	testConnectionSucceeded: (payload) => {
		return {
			type: types.TEST_CONNECTION_SUCCEEDED,
			payload,
		};
	},
};

const actions = { ...ACTION_CREATORS };

export default actions;
