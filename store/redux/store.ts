/* Core */
import { configureStore } from '@reduxjs/toolkit';

/* Instruments */
import { rootReducer } from './rootReducer';
import { middleware } from './middleware';

const reduxStore = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(middleware);
	},
});

export { reduxStore };
