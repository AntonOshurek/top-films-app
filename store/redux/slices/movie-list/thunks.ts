/* types */
import type { ReduxThunkAction } from '@/types/store-types';
/* Instruments */
// import { selectorFilmsListIsLoading } from './selectors';
import { movieList } from './movieListSlice';

export const incrementIfOddAsync = (): ReduxThunkAction => (dispatch) => {
	// const isLoading = selectorFilmsListIsLoading(getState());

	dispatch(movieList.actions.setLoading(true));
};
