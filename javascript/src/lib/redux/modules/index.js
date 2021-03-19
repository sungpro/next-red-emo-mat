import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';

import { HYDRATE } from 'next-redux-wrapper';
import themeSaga, { themeReducer } from './theme';

export const combinedReducer = combineReducers({	
	theme: themeReducer
	// ANOTHER REDUCER
});

export const rootReducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload // apply delta from hydration
		};
		if (state.theme) nextState.theme = state.theme;
		return nextState;
	}
	return combinedReducer(state, action);
};

export default function* rootSaga() {
	yield fork(themeSaga);
	// yield fork(ANOTHER_REDUCER)
}

