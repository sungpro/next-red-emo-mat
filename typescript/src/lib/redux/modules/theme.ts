import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';

export type ThemeTypes = 'light' | 'dark' | 'teal';

interface ThemeState { theme: ThemeTypes }

const initialState: ThemeState = {theme: 'light' }

export const setTheme = createAction('SET_THEME', (target: ThemeTypes) => target)();

export type ThemeActions = ActionType<typeof setTheme>;

// THEME SAGA
export default function* themeSaga() {
	yield takeLatest(setTheme, themeSaga);
}

export const themeReducer = createReducer<ThemeState, ThemeActions>(initialState)
	.handleAction(setTheme, (state, action) => ({
		...state,
		theme: action.payload
	}));
