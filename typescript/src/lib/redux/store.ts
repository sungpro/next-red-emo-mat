import { applyMiddleware, createStore, Store } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootSaga, { rootReducer, RootState } from './modules';

interface SagaStore extends Store {
	sagaTask?: Task;
}

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
		return composeWithDevTools(applyMiddleware(...middleware, logger));
	}
	return applyMiddleware(...middleware);
};

// create a makeStore function
const makeStore: MakeStore = (context: Context) => {
	// 1: Create the middleware
	const sagaMiddleware = createSagaMiddleware();

	const KEYNAME = 'NEXT-RED-EMO-MAT-STATE';

	// if KEYNAME exists in LocalStorage, load it
	const preloadedState =
		typeof window !== 'undefined' && localStorage?.getItem(KEYNAME)
			? JSON.parse(localStorage.getItem(KEYNAME) as string)
			: {};

	// 2: Add an extra parameter for applying middleware:
	const store = createStore(
		rootReducer,
		preloadedState,
		bindMiddleware([sagaMiddleware])
	);

	// 3: Run sagas on server
	(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

	// optional: subscribe to store events
	store.subscribe(() =>
		typeof window !== 'undefined' &&
		localStorage.setItem(KEYNAME, JSON.stringify(store.getState()))
	);

	return store;
};

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
