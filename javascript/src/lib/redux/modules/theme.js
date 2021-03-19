import { createAction, createReducer } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';

const initialState = { theme: 'light' }

export const setTheme = createAction('SET_THEME', (target) => target)();

// THEME SAGA
export default function* themeSaga() {
	yield takeLatest(setTheme, themeSaga);
}

export const themeReducer = createReducer(initialState)
	.handleAction(setTheme, (state, action) => ({
		...state,
		theme: action.payload
	}));
