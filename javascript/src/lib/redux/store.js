import { applyMiddleware, createStore } from 'redux';
import { createWrapper  } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga, { rootReducer } from './modules';

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
		return composeWithDevTools(applyMiddleware(...middleware, logger));
	}
	return applyMiddleware(...middleware);
};

// create a makeStore function
const makeStore = (context) => {
	// 1: Create the middleware
	const sagaMiddleware = createSagaMiddleware();

	const KEYNAME = 'NEXT-RED-EMO-MAT-STATE';

	// if KEYNAME exists in LocalStorage, load it
	const preloadedState =
		typeof window !== 'undefined' && localStorage?.getItem(KEYNAME)
			? JSON.parse(localStorage.getItem(KEYNAME))
			: {};

	// 2: Add an extra parameter for applying middleware:
	const store = createStore(
		rootReducer,
		preloadedState,
		bindMiddleware([sagaMiddleware])
	);

	// 3: Run sagas on server
	store.sagaTask = sagaMiddleware.run(rootSaga);

	// optional: subscribe to store events
	store.subscribe(() =>
		typeof window !== 'undefined' &&
		localStorage.setItem(KEYNAME, JSON.stringify(store.getState()))
	);

	return store;
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
