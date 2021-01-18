import types from './types.js';

export default function reducer(state = {}, action = {}) {
	switch (action.type) {
		case types.TEST_CONNECTION:
			return {
				...state,
			};
		case types.TEST_CONNECTION_IN_PROGRESS:
			return {
				...state,
				connectionInProgress: action.payload,
			};
		case types.TEST_CONNECTION_FAILED:
			return {
				...state,
				connected: false,
				connectionError: action.payload
			};
		case types.TEST_CONNECTION_SUCCEEDED:
			return {
				...state,
				connected: true,
				connectionError: null
			};

		default: return state;
	}
};
